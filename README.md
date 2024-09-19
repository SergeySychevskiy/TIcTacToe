# Tic-Tac-Toe Game

A simple Tic-Tac-Toe game with a React frontend and Express backend. The frontend sends the current game state to the backend and the backend responds with a random computer's move.

## Tech Stack

### Frontend
- React
- TypeScript
- Recoil
- Ant Design

### Backend
- Node.js
- Express
- TypeScript

## Getting Started

### Prerequisites
- Node.js (v16 or later)

### Running the Backend

Navigate to the server directory, install dependencies and start the server:
   ```
   cd server
   npm install
   npm start
   ```

The backend should now be running on `http://localhost:3001`.

### Running the Frontend

Navigate to the frontend directory, install dependencies and start the development server:
   ```
   cd client
   npm install
   npm start
   ```

The frontend should now be accessible at `http://localhost:3000`.

## API Endpoints

### POST /api/move
Makes a move for the computer player.

Request body, json
```
{
    "board": ["X", "", "", "", "O", "", "", "", "X"]
}
```

Response, json:
```
{
    "board": ["X", "", "", "", "O", "", "O", "", "X"]
}
```
