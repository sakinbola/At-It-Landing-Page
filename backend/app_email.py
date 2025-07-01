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
# dotenv.load_dotenv()

app = Flask(__name__)

mail = Mail(app)

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USERNAME"] = os.getenv("DELIVERY_EMAIL")
app.config["MAIL_PASSWORD"] = os.getenv("PASSWORD")
app.config["MAIL_MESSAGE"] =  os.getenv("MESSAGE")
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = True


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/submit",method=["POST"])
def submit():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]

        msg = Message("Hello",sender=os.getenv("DELIVERY_EMAIL"),recipents=[os.getenv("RECIEVE_EMAIL")])
        msg.body = "Hello"+name+",\n\n"+ Message
        mail.send(msg)
        return redirect(url_for("index"))
    
app.run(debug=True)