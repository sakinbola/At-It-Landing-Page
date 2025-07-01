from flask import Flask,request,jsonify
from flask_cors import CORS
import smtplib
# simple mail transfer protocol 
from email.mime.text import MINEText
from email.mime.multipart import MINEMultipart 
# mime text multipurpose internal mail extension 
# creates message and email structure 
import os 
from dotenv import load_dotenv 
# from "./src/pages/contact.jsx" import send_email_values


load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route("/api/send-email",methods=["POST"])
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


        send_smtp_email(name,email,message)

        return jsonify({"message":"Email sent successfully"})
    

    except Exception as e:
        return jsonify({"error":str(e)}),500



def send_smtp_email(name,email,message):
    

    send_user_email(name,email)


    send_owner_email(name,email,message)


def send_user_email(name,email):
    sender_email =  os.getenv("EMAIL_USER")
    sender_password = os.getenv("EMAIL_PASSWORD")

    # recieve_email = 

    msg = MINEMultipart()
    msg["From"] = sender_email
    msg["To"] = sender_email 
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

    msg.attach(MINEText(body, "plain"))


    server = smtplib.SMTP(os.getenv("EMAIL_HOST")),os.getenv("EMAIL_PORT")
    server.starttls()
    server.login(sender_email,sender_password)
    server.send_message(msg)
    server.quit 


def send_owner_email(name,email,message):
    sender_email =  os.getenv("EMAIL_USER")
    sender_password = os.getenv("EMAIL_PASSWORD")

    # recieve_email = 

    msg = MINEMultipart()
    msg["From"] = sender_email
    msg["To"] = sender_email 
    msg["Subject"] = f"A New User has joined Information below"

    body = f"""

    Name : {name}
    Email : {email}
    Message : {message}

    """

    msg.attach(MINEText(body,"plain"))

    server = smtplib.SMTP(os.getenv("EMAIL_HOST"),os.getenv("EMAIL_PORT"))
    server.starttls()
    server.login(sender_email,sender_password)
    server.send_message(msg)
    server.quit 