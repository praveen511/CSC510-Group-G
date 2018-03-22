# AdBarn

### Introduction

The main aim of this project is to create a web based portal which allows various enterprises to advertise their products to the users while allowing the users to earn money by viewing the advertisements in their free time.

### Prerequisites:

1. [Git](https://git-scm.com/downloads)
2. [Nodejs](https://nodejs.org/en/download)

### Project Execution:

```
git clone https://github.com/saiharsha1994/CSC510-Group-G.git
```
### Run Server
```
This need not to be done as the server is deployed in https://afternoon-cliffs-24932.herokuapp.com/
To check the server loacally below commands can be executed
cd <APP_ROOT>/server
npm install
node index.js
```
### Run Client
```
open command prompt, navigate to \CSC510-Group-G\Client\
cd <APP_ROOT>/Client
npm install
npm run build   // to reload latest updates
npm run dev
```

This should open up the application in your default browser. If not, please navigate to browser and run localhost:8080/
This should open up login page.

There are two types of accounts:

### Enterprises : 

As an enterprise, you can :

  - Upload and delete your advertisements

  - Add coins in your account

  - Update total coins per hour

### Users : 

As a user, you can :


  - View advertisements from various enterprises

  - Perform a tag-based search to filter the advertisements according to your taste
  
  - Redeem money for the total time spent on watching the advertisements
