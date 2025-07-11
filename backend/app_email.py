from flask import Flask,request,jsonify
from flask_cors import CORS
import smtplib
# simple mail transfer protocol 
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart 
# mime text multipurpose internal mail extension 
# creates message and email structure 
import os 
from dotenv import load_dotenv 
# from "./src/pages/contact.jsx" import send_email_values
from flask_sqlalchemy import SQLAlchemy


from flask_limiter import Limiter
from flask_limiter.util import get_remote_address


load_dotenv()

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABSE_URL")
# get db form .env /  configuration
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False 
# no tracking modifications 

app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'true').lower() == 'true'
# enables tls 

db = SQLAlchemy(app)
# initalize db 


limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["100 per hour"]
)

# limits by ip 


def setup_rls():
    try:
        # Check if RLS policy already exists
        result = db.engine.execute("""
            SELECT COUNT(*) FROM pg_policies 
            WHERE tablename = 'signups' AND policyname = 'users_own_signups';
        """).fetchone()
        
        if result[0] == 0:  # Policy doesn't exist yet
            db.engine.execute("ALTER TABLE signups ENABLE ROW LEVEL SECURITY;")
            db.engine.execute("""
                CREATE POLICY "users_own_signups" ON signups
                FOR ALL USING (email = current_setting('app.current_user_email'));
            """)
            print("RLS setup complete!")
        else:
            print("RLS already configured!")
    except Exception as e:
        print(f"RLS setup skipped: {e}")



@app.route("/api/send-email",methods=["POST"])
@limiter.limit("5 per minute")
def send_email():
    try:
        data=request.get_json()

        name = data.get("name")
        email = data.get("email")
        message =  data.get("message")

        if not all ([name,email]):
            return jsonify({"error":"All fields required"}),400
        
        if not message:
            message = "no message was given"

        # if existing email found 
        existing_signup = Signup.query.filter_by(email=email).first()
        if existing_signup:
            return jsonify({"error":"Email already signed up!"}), 409 
        #   conflict error


        new_signup = Signup(name=name,email=email,message=message)
        # new signup 

        db.session.add(new_signup)
        # add to db 

        db.session.commit()
        # commit to db 

        send_user_email(name,email)

        return jsonify({"message":"Email sent successfully"})
    

    except Exception as e:
        # error occured get rid of db 
        db.session.rollback()
        return jsonify({"error":str(e)}),500



# def send_smtp_email(name,email,message):
    

#     send_user_email(name,email)


    # send_owner_email(name,email,message)


def send_user_email(name,email):
    try:
        sender_email =  os.getenv("EMAIL_USER")
        sender_password = os.getenv("EMAIL_PASSWORD")

        # recieve_email = 

        msg = MIMEMultipart()
        msg["From"] = sender_email
        msg["To"] = email
        msg["Subject"] = f"\U0001F389 You're In! Welcome to the At-iT Beta Team"
        # unicode for party hat emoji 
        
        body = f"""
        
        Hi {name},
        
            Thanks for signing up — we’re thrilled to have you on board as one of the first beta 
            testers FOR At-iT, the next-generation sports analytics tool built to unlock athlete 
            potential through game film analysis and AI.

            Here’s what to expect:
            🔍 Early Access: You’ll get exclusive access to test-drive our proof of concept and provide feedback before our public release.
            🧠 Smarter Coaching Insights: We’re leveraging cutting-edge AI to deliver personalized feedback on player performance, with a focus on QB performance to start with.
            📣 Your Voice Matters: Your feedback will directly shape the product. Help us make it better for athletes and coaches everywhere.
            
            We're currently rolling out access in waves — we’ll be in touch shortly with details on how to get started.
            If you have any questions in the meantime, feel free to reply to this email or reach out to us at [support email or contact form link].
            Thanks again for joining us at the ground level. We can’t wait to show you what we’ve been building.
            
            Game on,
            
            At-iT

        """

        msg.attach(MIMEText(body, "plain"))


        server = smtplib.SMTP(os.getenv("EMAIL_HOST"),os.getenv("EMAIL_PORT"))
        server.set_debuglevel(1)
        server.starttls()
        server.login(sender_email,sender_password)
        server.send_message(msg)
        server.quit()

    except smtplib.SMTPException as e:
        print(f"SMTP error: {e}")
        raise
    except Exception as e:
        print(f"General error: {e}")
        raise


# def send_owner_email(name,email,message):
#     sender_email =  os.getenv("EMAIL_USER")
#     sender_password = os.getenv("EMAIL_PASSWORD")

#     # recieve_email = 

#     msg = MIMEMultipart()
#     msg["From"] = sender_email
#     msg["To"] = sender_email 
#     msg["Subject"] = f"A New User has joined Information below"

#     body = f"""

#     Name : {name}
#     Email : {email}
#     Message : {message}

#     """

#     msg.attach(MIMEText(body,"plain"))

#     server = smtplib.SMTP(os.getenv("EMAIL_HOST"),os.getenv("EMAIL_PORT"))
#     server.starttls()
#     server.login(sender_email,sender_password)
#     server.send_message(msg)
#     server.quit()


# define table
class Signup(db.Model):
    __tablename__ = "signups"

    id = db.Column(db.Integer,primary_key=True)
    # unique id 
    name = db.Column(db.String(100),nullable=False)
    # 100 char max cant be empty 
    email = db.Column(db.String(120),nullable=False)
    # email 120 char max cant be empty 
    message = db.Column(db.Text,nullable=True)
    # longer text can be empty 
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    # datetime is for date and time , server default every new row create timestamp 
    # time stamp 

    def __repr__(self):
        return f"<Signup {self.email}>"
    



# # run once first time ever
# if __name__ == "__main__":
#     with app.app_context():
#         # requires app context 
#         db.create_all()

#         # create database initally 


#     app.run(debug=True) 
    
    
#     # for dev servers enables debugging 


if __name__ == "__main__":
    with app.app_context():
        setup_rls()
        app.run(debug=True) 