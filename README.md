# Water Heifers

## Set Up

In the terminal please run the following code to get things up and running.

- bundle install
- rails db:migrate db:seed
- npm start --prefix client
- rails s

## Description

This website is for anglers(fishermen) to be able to schedule a guided fishing trip in Alaska. The user can look through all the images in the gallery. The user can look up trips and filter it out by month they would like to travel. There is also a donation portion to donate money to a non-profit. The user also can create a blog, to start a conversation. Once a employee is logged in then forms open up to add trips, update trips, delete trips, create companies to donate money too. Can also manage blogs and add photo's to the gallery. 

## Features

 * The login will determine if you have an account and display different information based if you are an employee or user.
 * Sign up is if your a potential customer and would like to view all the information on the webpage.
 * In gallery tab there is a add gallery picture button to add photo's to the gallery through Cloudinary. 
    - only employees have access
* Schedule trip tab has a spot to schedule a reservation which updates available spots.
    - if you already have scheduled a trip it shows an error
    - if no-one is logged in then it pushes you to login 
    - employees have the ability to edit and delete button
        - edit will push you to create trip form
* Create trip has a form to create or edit a trip
    - only employees have access
* Donate gives the user the ability to donate to non-profits.
    - if not logged in then it will push the user to login
    - user they have the ability to donate in increment amounts and donate
    - employee has a edit and delete button
        - edit will pre-fill out the add company form and push you into that tab
* Add Company tab is a form to edit or create new companies to donate too
    - only employees have access 
* Blog shows titles, click on titles to show blog
    - Not logged in pushes user to login
    - user can create, update and delete blogs they made
    - user can respond to other blogs and update and delete their own response.
* My profile is for users to update their information and view their trips and donations
* Customer List is to view and update users to employee status

## Login Credentials 
* Employee 
    * email: bobbystar@gmail.com
    * password: Hello
* Customer 
    * email: holly1@gmail.com
    * password: Hello

## Links 
* [Video Walk Through](https://youtu.be/9DXDHDTXYMw)
* [Blog Link](https://medium.com/@bobby.edmonds89/redux-for-the-user-in-react-330551156bfc)