# Installation and User Guide
The goal of this project is to preseve and bring awareness Okiffnawa's history through our website.

## FrontEnd 
Our frontend was created using the react framework and bootsrap libraries. It dispalys articles and documents relating to Okinawa's culture. For local development, you can change the url variable in frontend/lib/article_api.js to localhost:8000.

### Dependancies 
npm, node

### Installation 
```
cd frontend/
npm install 
```

### Run 
```
cd frontend/
npm install 
npm start
```

## Backend
Our backend is made using Django and deployed onto aws. It stores articles created about Okinawa's culture and provides RESTful APIs to interact with these articles.

### Dependancies 
python pip 

### Installation 
```
cd backend/
pip install -r requirements.txt
```

### Run
```
cd backend/
pip install -r requirements.txt
python manage.py runserver
```


