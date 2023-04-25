# National-Park-Tracker
SEI Mariposa Capstone Project:  MERN app for National Parks 


## Route Table
|       **URL**                  | **REST Route** | **HTTP Verb** | **CRUD Action** |        
| ------------------------------ | -------------- | ------------- | --------------- | 
| /api/tips/park/:nationaParkId  | index          | GET           | read            | 
| /api/tips:id                   | show           | GET           | read            | 
| /api/tips                      | create         | POST          | create          | 
| /api/tips/:id                  | edit           | GET           | read            | 
| /api/tips/:id                  | update         | PATCH/PUT     | update          | 
| /api/tips/:id                  | destroy        | DELETE        | delete          | 
| /myparks                       | index          | GET           | read            | 
| /parks                         | index          | GET           | read            | 
| /parks/:id                     | show           | GET           | read            |

## Resources used
- Resource for responsive navbar using tailwind and react: https://dev.to/prnvbirajdar/the-easiest-way-to-build-a-responsive-navbar-using-tailwind-react-2803

## User Stories 
- As a user of the national park tracker website, I want to be able to view a comprehensive list of all the national parks in order to plan my future trips.
- As a user, I want to be able to click on a specific national park from the list in order to view additional information about that park such as its address, location, park hours, description, and any other relevant details.
- As a user, I want to be able to create tips about a particular national park that I can later edit or delete, so that I can share my experiences and recommendations with other users of the website.
- As a user, I want to be able to mark a national park as visited in order to keep track of which parks I have already explored.
- As a user, I want to be able to toggle between a list of national parks that I have visited and those that I have not visited yet, so that I can easily keep track of my progress and plan future trips accordingly.

## MVP Goals (How your specific project will look & behave in order to accomplish MVP)
- Utilize the third-party Nation Parks API
- Model for park tips and user visits (if they have visited the park or not)
- Routes that perform CRUD operations on Tips model
- Front end components: TipsSection, IndexPage, DetailsPage, Nav bar, footer
- Uses CSS Framework to make the app appear professional and responsive, TBD which framework
- Observe a consistent separation of concerns throughout the project
- Use a technology not taught in class (i.e. SemanticUI), or a bonus concept (i.e. JWT), will use something for authorization, probably JWT or Oauth 
- Hosted on Heroku - to be met by April 28, 2023


## Stretch Goals (How your specific project look & behave *AFTER* you accomplish MVP)
- Add a badge to the details page if the user has visited the park 
- Google maps iframe for the details page 
- Add some stats about how many parks a user has visited 
- filter the index page by some criteria, like region or state 
- restrict the ability to edit/delete comments to the user who made the comment 
- add search functionality for national parks
