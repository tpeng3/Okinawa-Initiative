# Firebase auth
import pyrebase

config = {
    "apiKey": "AIzaSyBU2XaMu1t7oneOeSaWNyelV4IlAzw3dX4",
    "authDomain": "okinawa-initiative.firebaseapp.com",
    "databaseURL": "https://okinawa-initiative.firebaseio.com",
    "projectId": "okinawa-initiative",
    "storageBucket": "okinawa-initiative.appspot.com",
    "messagingSenderId": "784545152381"
}
firebase = pyrebase.initialize_app(config)

auth = firebase.auth()

def create_user(email, password):
    user = None
    try:
        user = auth.create_user_with_email_and_password(email, password)
        auth.send_email_verification(user['idToken'])
    except:
        print("user exists")
    return user

def login(email, password):
    user = None
    try:
        user = auth.sign_in_with_email_and_password(email, password)
    except: 
        print("invalid credentails")
    return user 