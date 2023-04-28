# National-Park-Tracker
SEI Mariposa Capstone Project: MERN app for National Parks  <a href="#"> Find Your Park </a>


![alt text](/np-app/frontend/public/NP%20App.png "App screenshot") 


## Technologies Used
- MongoDB/Mongoose 
- Express 
- React
- Node.js
- Vite
- JWT Simple
- CSS framework: Tailwind
- Git GitHub
- Visual Studio Code
- Heroku 

<br>

## Installation Instructions
Clone respository or download controllers, models, public, and views folders folders and files within. 

Run npm install to install all dependencies listed in the package.json file.

Update .env file with your database connection string, api key and assign port 3000.

Run npm install to install all dependencies.

Enter command npm run dev to connect to MongoDB. Open local server on port 3000 to view the page in the browser. 

Navigate to localhost:3000/seed to seed inital data to MongoDB database.

Navigate between the views using the navigation bar at the top of the website. 

<br>

## Resources Used
- National Park Service API, parks endpoint: to review documentation for this API and request an API key, visit https://www.nps.gov/subjects/developer/get-started.htm
- Resource for responsive navbar using tailwind and react: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
- 404 Image: Photo by <a href="https://unsplash.com/@dallehj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel Jensen</a> on <a href="https://unsplash.com/photos/UDleHDOhBZ8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- About Image: Photo by <a href="https://unsplash.com/@rocinante_11?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mick Haupt</a> on <a href="https://unsplash.com/s/photos/national-park?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
<br>

## User Stories 
- As a user of the national park tracker website, I want to be able to view a comprehensive list of all the national parks in order to plan my future trips.
- As a user, I want to be able to click on a specific national park from the list in order to view additional information about that park such as its address, location, park hours, description, and any other relevant details.
- As a user, I want to be able to create tips about a particular national park that I can later edit or delete, so that I can share my experiences and recommendations with other users of the website.
- As a user, I want to be able to mark a national park as visited in order to keep track of which parks I have already explored.
- As a user, I want to be able to toggle between a list of national parks that I have visited and those that I have not visited yet, so that I can easily keep track of my progress and plan future trips accordingly.

<br>

## Route Table
|       **URL**                  | **REST Route** | **HTTP Verb** | **CRUD Action** |        
| ------------------------------ | -------------- | ------------- | --------------- | 
| /api/tips/park/:nationaParkId  | index          | GET           | read            | 
| /api/tips                      | create         | POST          | create          | 
| /api/tips/:id                  | edit           | GET           | read            | 
| /api/tips/:id                  | update         | PATCH/PUT     | update          | 
| /api/tips/:id                  | destroy        | DELETE        | delete          | 
| /myparks                       | index          | GET           | read            | 
| /                              | index          | GET           | read            | 
| /deatils/:id                   | show           | GET           | read            |


<br>

## Wireframes
https://www.figma.com/file/I07TwyrIivxYVoP24kShV0/National-Park-Tracker-Wire-Frames?node-id=0%3A1&t=GTYb3A7rn0BeLnfC-1 

<br>

## Unsolved Problems/Hurdles
WIP

<br>

## Next Steps
<a href="#"> Find Your Park </a>  will continue to grow in the coming months to include ability to filter the index page and search functionality for national parks. Stay tuned. 