# Gift Hamper / Farm2Door Backend

Node.js + Express backend with MongoDB (via Mongoose) providing authentication (signup/login) using bcrypt password hashing and JWT tokens.

## Tech Stack

- **Express** — REST API framework
- **MongoDB + Mongoose** — database and schema modeling
- **bcryptjs** — password hashing
- **jsonwebtoken (JWT)** — auth tokens
- **dotenv** — environment variable management

## Project Structure

```
├── models/
│   └── User.js          # Mongoose schema for users
├── routes/
│   └── auth.js           # Signup and login endpoints
├── server.js              # Entry point, DB connection, route mounting
├── .env.example            # Template for required environment variables
└── .gitignore
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root (copy `.env.example` and fill in real values):
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_random_secret_key
   PORT=5000
   ```

3. Run the server:
   ```bash
   node server.js
   ```

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/signup` | Create a new user (name, email, password) |
| POST | `/api/auth/login` | Log in and receive a JWT token |

## Security Notes

- Passwords are hashed with bcrypt before being stored — plaintext passwords are never saved.
- Database credentials and JWT secret are loaded from environment variables, never hardcoded.
- `.env` is excluded from version control via `.gitignore`.
