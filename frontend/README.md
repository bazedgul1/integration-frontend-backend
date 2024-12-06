Task Management Application
This is a full-stack application for managing tasks. It allows users to create, update, view, and delete tasks. Tasks have a title, description, status, and creation timestamp. The app uses Express.js and Mongoose for the backend and React.js with TailwindCSS for the frontend.

Features
Backend (Node.js + Express + Mongoose)
RESTful API with the following routes:
POST /api/tasks: Add a new task.
GET /api/tasks: Retrieve all tasks.
PUT /api/tasks/:id: Update a task by its ID.
DELETE /api/tasks/:id: Delete a task by its ID.

MongoDB is used as the database to store tasks.
Environment variables (.env) are used to store the MongoDB connection string.
Frontend (React.js + TailwindCSS)
A form to add new tasks.
A task list to display all tasks, color-coded based on their status:
Pending: Yellow background ⌛
In Progress: Blue background 🔄
Completed: Green background ✅

Options to:
Edit tasks (inline editing).
Update status using a dropdown menu.
Delete tasks.
Validation for empty task titles before submission.
Integrated with the backend using Axios for API calls.
Technologies Used

Backend
Node.js: JavaScript runtime for building server-side applications.
Express.js: Framework for creating RESTful APIs.
Mongoose: ODM for MongoDB.
dotenv: For environment variable management.
cors: To allow cross-origin requests.
nodemon: For easier development with auto-reloading.

Frontend
React.js: Frontend library for building the user interface.
TailwindCSS: For responsive and modern styling.
Axios: For making API requests.
Installation and Running the App

Prerequisites
Install Node.js and npm (Node Package Manager).
Install MongoDB and make sure it’s running locally or use a cloud service like MongoDB Atlas.

Backend Setup
Navigate to the backend directory:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory and add your MongoDB connection string:

env
Copy code
MONGO_URI=your_mongodb_connection_string
Start the backend server:

bash
Copy code
npm start
By default, the server runs on http://localhost:6136.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend application:

bash
Copy code
npm run dev
The frontend will run on http://localhost:5173.

Running the App
Make sure both the backend and frontend servers are running.
Open the frontend URL (http://localhost:5173) in your browser to interact with the app.

Project Structure
Backend
models: Contains the Mongoose schema and model for tasks.
routes: Defines all API endpoints for the application.
controllers: Handles the business logic for each API route.
utils: Contains reusable utilities like API response handlers.
server.js: The main entry point for the backend.
Frontend
components: Contains React components like AddTaskForm and TaskList.
utils: Contains the API utility (Axios instance).
App.jsx: The main app file that integrates all components.

How it Works
Backend:
The server connects to MongoDB using the connection string in .env.
API routes are exposed for CRUD operations on tasks.

Frontend:
Users interact with a React-based UI.
Axios is used to make API requests to the backend for managing tasks.
