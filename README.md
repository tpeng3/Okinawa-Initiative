# Okinawa Memory Initative 
The goal of this project is to preseve and bring awareness Okiffnawa's history through our website.

## Build 

### FrontEnd 
Our frontend was created using the react framework and bootsrap libraries. It dispalys articles and documents relating to Okinawa's culture. For local development, you can change the url variable in frontend/lib/article_api.js to localhost:8000.

#### Dependancies 
npm, node

#### Run 
```
cd frontend/
npm install 
npm start
```

### Backend
Our backend is made using Django and deployed onto aws. It stores articles created about Okinawa's culture and provides a RESTful APIs to interact with these articles.

#### Dependancies 
python pip 

#### Run
```
cd backend/
pip install -r requirements.txt
python manage.py runserver
```


