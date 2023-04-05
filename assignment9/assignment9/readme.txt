The project directory is structured into two main folders, backend and frontend, which respectively handle the server-side and client-side of the application. Within the backend directory, the code is further organized into separate folders such as controllers, models, routes, and services, each with its specific responsibilities. Controllers contain the code that pertains to the APIs for the Login functionality, retrieving user data for the contact page and jobs table, and other related features. Models are responsible for creating the database schema for the user table and other related schema. The Routes folder contains code for the User routes, while Services are tasked with initializing and declaring all the relevant services.

In the frontend directory, the code is organized into separate pages such as About us, Contact, Dashboard, Failure, Home, Jobs, and Login, each in its respective folder. Additionally, there is a components folder that contains reusable components such as Navbar and Card, which are utilized in the different pages.

This directory structure enhances the application's maintainability, scalability, and overall organization, thereby improving the development and deployment process.

Getting Started
To run the application, first clone the repository to your local machine

Next, navigate to the project directory and install the required dependencies using the following command:
npm install

Once the dependencies have been installed, start the server and the frontend application using the following command:
npm start

This will launch the application in your browser at http://localhost:3000/.

Credits
This assignment was created as part of a course on React and Node.js.

License
This project is licensed under the MIT License.