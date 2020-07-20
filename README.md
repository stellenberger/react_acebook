This is another fullstack take on Acebook - the new facebook. 

I am using decoupled React and Rails. I am planning on implementing as many of the features as I can. 

Users can: 

- Sign up with email and password
- Make status'
- Upload photos and profile pictures
- Add friends
- Comment on friends posts 
- Like friends posts
- Join groups 

to run this app 

first clone this repo

```
$ git clone [thisrepo]
```

Then cd into rails backend and install dependencies
```
$ cd rails_backend
$ bundle install
```

Then start on port 3001 
```
$ rails s -p 3001
```

Then cd into react frontend and start the server
```
$ cd ../react_frontend
$ npm start
```