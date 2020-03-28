# Full Stack Developer Work Challenge

**Author**: Cong Dao

**Email**: congdaovan94@gmail.com

**Github**: https://github.com/congdv/lab-challenge

**Deploy**: https://gentle-lake-93376.herokuapp.com/

## Requirement

Laravel development

Create a web app using the Laravel framework (PHP) to do the following:

    Allow a user to login and explore the labs and click to open up a google maps

    From admin, drop a pin for all the locations in the following data sheet: https://drive.google.com/file/d/1XjqJ7kp2AcMQjWaf_exDTTx-1qU4ctGp/view?usp=sharing
    Feel free to add other features that might be useful (such as search)

The purpose of this web app is allow students to easily find labs.

## My Approach

Because I don't have any experience with Laravel framework, so I decided to use Express, React, and Webpack to build the web app. This will be miss the first criteria of the requirement.

### Brainstorming

From data that shows all locations in the data sheet. I thought I need to read all data from data sheet and display to website. So, I took two different approach for two main previous purpose, those are read data and display data. For displaying data, I will do in the backend side of the webpack. With node.js, I can read data from data sheet and store them into MongoDB. I used MongoDB cloud for read and write to data, and it helped me to deploy the web app easily on Heroku App. For displaying data, I used React to display data in a map visually.

### Technology

a. Back end development

I used Express and MongoDB that built with Node.js. Why I use that stack? Just I knew clearly that stack comparing to PHP framework.

For server side, It handled necessary api requests from front-end including login, register, and get all data from data sheets.

The server will read data sheet in its local and store them to MongodB in the beginning. When the server receive that request, the server will check mongoDB to return to client.

b. Front end development

I built with React. Why I use that? Because I like react.js.

For style of website, I used Bootstrap framework for styling the website. To display the map in the website, I was considering to use Google Map or alternative library; and Mapbox was coming up with me. After searching on the internet, I heard about this library that wrapped Mapbox with React. That was cool for me, It is very easy to use and implement with my webapp. It's React Map GL from [uber](https://uber.github.io/react-map-gl/), it's also open source project - I love open source.

Now I have enough tools to build the web app.

### How I built?

For quickly building the web app, I reuse some components or code from my old project. All my project are in my Github profile.

### My thought

That was cool project. It likes a hackathon competition, I spent 16 hours to built the website from scratch.

Things I missed:

-   Write test for the project
-   Allowing the user can add more lab in the dashboard
-   Different type of the user for uploading labs or view labs only.

_If you are interested in my project, please let me know_
