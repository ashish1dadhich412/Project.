# Backend Server

This is a simple backend server built with Node.js, Express, and MongoDB.

## Features
- REST API for managing passengers
- MongoDB integration
- CORS support
- Static file serving for uploads

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- cors

## Setup Instructions

### Prerequisites
- Node.js installed on your system
- MongoDB database

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/repository-name.git
   ```
2. Navigate into the project directory:
   ```sh
   cd repository-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Configuration
1. Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

### Running the Server
- Start the server in production mode:
  ```sh
  npm start
  ```
- Start the server in development mode (with automatic restart on file changes):
  ```sh
  npm run dev
  ```

### API Endpoints
| Method | Endpoint          | Description               |
|--------|------------------|---------------------------|
| GET    | /passengers      | Fetch all passengers      |
| POST   | /passengers      | Add a new passenger       |
| PUT    | /passengers/:id  | Update a passenger       |
| DELETE | /passengers/:id  | Delete a passenger       |

## License
This project is licensed under the ISC License.


