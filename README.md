
# Dish-Poll 

 Make your favorite dishes win !
 

## Hosted Link
[Click here to open hosted website](https://dishpoll-robin.netlify.app)
## Tech Stack

React, SCSS and Json-Server to store poll results.


![Logo](https://i.ibb.co/wLpdzFP/logo-tech.png)




## Steps to run the project
Clone down this repository using 
[link](https://github.com/code-with-rskamra/DishPoll)

You will need node and npm installed globally on your machine

Use any Editor of your choice and open the folder containing all files

Now open terminal and run:

    npm install

Wait for files to get downloaded.
Once done, use this command to locally run the project.

    npm start
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_DISHES_API`

`REACT_APP_POLL_API`


## Screenshots


**Login Screen**

Proper error message is displayed when credentials are incorrect.

For login credentials, Kindly refer [src/data/users.json](https://github.com/code-with-rskamra/DishPoll/blob/main/src/data/users.json)

or you can try any of these:

    username: amar
    password: amar123

    username: akbar
    password: akbar123

    username: antony
    password: antony123

    username: john
    password: john123

    username: paul
    password: paul123


![App Screenshot](https://i.ibb.co/jkgWjzC/1.png)


**Dashboard**

Once the credentials are verified, the user is redirected to dashboard,
where all the dishes are displayed to the user.

![App Screenshot](https://i.ibb.co/LS0ttTZ/2.png)

To vote any of the dish, a user can click on "Vote" and choose the rank accordingly. (as shown in the next screenshot)

![App Screenshot](https://i.ibb.co/4ZyjfVK/3.png)

and to save/update the changes, user must click the "Save" button on top-right.

![App Screenshot](https://i.ibb.co/HNyXPcy/4.png)

Once the save button is clicked the selected dishes are saved (Json-Server) and are visible under the tab "Poll Result"

Even on reload, signing out the user, or clearing the local storage, the results selected by a user will remain saved as the data is being saved on json-server (Although it can be edited by the user himself).

![App Screenshot](https://i.ibb.co/0F3Wq2j/5.png)


The Poll results will be visible as per the points/scores received from all the different users.
A user who is logged in will be able to distinguish the dishes they have chosen by the orange border that surrounds them.


