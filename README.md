# Freelance-MERN
### "Why Choose Us? Empowering Freelancers to Land the Jobs They Deserve with IKAC Works"
Unlock a world of opportunity with IKAC Works, where your talent meets the perfect projects. Here, you’ll connect with clients who value expertise, tackle inspiring challenges, and build a legacy that reflects your skills and passion. From expanding your portfolio to accessing global projects, IKAC Works empowers you to work freely and create your path to success. Dive into a marketplace where innovation meets opportunity, and let your freelancing journey truly begin.

![IKAC Works](./assests/main.png)

## Prerequisites
- Node.js (v14 or later)
- MongoDB (local or Atlas)
- Package Manager (e.g., npm or yarn)

## Installation
1.Clone the repository:
```
git clone https://github.com/kamaleshwaran11/Freelance-MERN.git
cd Freelance-MERN
```
2.Install dependencies for both frontend and backend:
```
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```
## Running the Application
You can start the backend and frontend servers independently, or use concurrently to run them together.

### Step 1: Backend (Node.js)
1.Navigate to the server directory:
```
cd server
```
2.Create a .env file in the server folder with the following variables:
```
PORT=5000
MONGO_URI=<Your MongoDB Connection String>
```
3.Run the server:
```
npm start
```
The server should now be running on `http://localhost:5000.`
### Step 2: Frontend (React)
1.Navigate to the client directory:
```
cd ../client
```
2.Create a .env file in the client folder with the following variable:
```
REACT_APP_API_URL=http://localhost:5000
```
3.Run the client:
```
npm start
```
The React app should now be running on `http://localhost:3000.`
## Running Both with `concurrently`
To run both servers with a single command, install `concurrently` in the root directory:
```
npm install concurrently --save-dev
```
Then, in the root `package.json`, add:
```
"scripts": {
  "start": "concurrently \"npm run server\" \"npm run client\"",
  "server": "cd server && npm start",
  "client": "cd client && npm start"
}
```
Now, you can start both servers with:
```
npm start
```
## Environment Variables
The following environment variables are required for this application:

### Server
- PORT: Port on which the server will run (default: 5000)
- MONGO_URI: MongoDB connection string
### Client
- REACT_APP_API_URL: URL of the backend API server, usually http://localhost:5000 for local development

## Technologies Used
- Frontend: React, JavaScript, CSS
- Backend: Node.js, Express
- Database: MongoDB (Mongoose ORM)
- Environment Variables: dotenv
- CORS: Enabled for cross-origin requests
  
## Scripts
### Server:
- `npm start`: Starts the Node.js server
- `npx nodemon`: Starts the server with automatic restarts on file changes
### Client:
- `npm start`: Starts the React development server
### Root:
- `npm start`: Runs both frontend and backend simultaneously with concurrently.


## License
This project is licensed under the MIT License. See the LICENSE file for details.
