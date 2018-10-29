# OKINAWA INITIATIVE BACKEND
Using Django and Firebase 

# Set-up 
Install python3
https://docs.python-guide.org/starting/installation/

Install firebase and django
```
pip3 install -r requirements.txt
```

# Run Django
```
python3 manage.py runserver
```

# APIs
 
## /login
Body:
```
{
    email: '',
    password: ''
}
```
Returns HTTP200:body{user ID} if successful.
Returns HTTP_400_BAD_REQUEST if unsuccessful. 

## /signup
Body:
```
{
    email: '',
    password: ''
}
```
Returns HTTP200:body{user ID} if successful.
Returns HTTP_400_BAD_REQUEST if unsuccessful. 