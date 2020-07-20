This is another fullstack take on Acebook - my version of Facebook

I am using decoupled React and Rails. I am planning on implementing as many of the features as I can. 

In this repo you can find some wireframes that I drew up before this project was started, as well as user stories, the rails backend server, the React frontend views, and a little bit of information on how I built it and how you can run it. 

User stories:

- Sign up with email and password
- Make status'
- Upload photos and profile pictures
- Add friends
- Comment on friends posts 
- Like friends posts
- Join groups
- Message each other
- Message in groups 
- Have control over their profile
 

## Usage 

First, clone this repo

```
$ git clone [thisrepourl]
```

Then cd into rails backend, install dependencies, set up database and start on port 3001. For use, I have placed some dummy users in the database already. 

```
$ cd rails_backend
$ bundle install
$ rails s -p 3001
```

Then cd into react frontend and start the server

```
$ cd ../react_frontend
$ npm start
```

Use example@example.com and Password1 to log into a fully equipped profile to see the extent of the project.