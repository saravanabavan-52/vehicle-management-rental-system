# Vehicle Management System - Complete Setup Guide

## Overview

This is a full-stack vehicle management system with user registration, login, and role-based access control.

- **Frontend**: React + Vite + Bootstrap
- **Backend**: Node.js + Express + MongoDB
- **Authentication**: JWT tokens with bcrypt password hashing

---

## Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local installation) OR MongoDB Atlas account (cloud)
- A code editor (VS Code recommended)

---

## Backend Setup

### Step 1: Navigate to Backend Directory
```bash
cd backend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the backend folder (copy from `.env.example`):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vehicle-management
JWT_SECRET=vehicle_management_secret_key_2024
JWT_EXPIRE=7d
NODE_ENV=development
```

**Important**: If using MongoDB Atlas (cloud):
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/vehicle-management
```

### Step 4: Ensure MongoDB is Running

**Local MongoDB:**
- Windows: Start MongoDB from Services or run `mongod` in PowerShell/CMD
- Mac/Linux: Run `mongod` in terminal

**MongoDB Atlas (Cloud):**
- Go to https://www.mongodb.com/cloud/atlas
- Create a cluster and get your connection string

### Step 5: Start Backend Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

You should see: `Server is running on port 5000`

---

## Frontend Setup

### Step 1: Navigate to Frontend Directory (from root)
```bash
cd ..
```

### Step 2: Install Dependencies (if not already done)
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The frontend will typically run at `http://localhost:5173`

---

## Testing the Application

### 1. Navigate to Register Page
- Go to `http://localhost:5173/register`

### 2. Create a New Account
- **Name**: John Doe
- **Email**: john@example.com
- **Password**: password123
- **Role**: User (or Owner)
- Click "Register"

### 3. Verify
- Should see success message
- Automatically logged in and redirected to dashboard
- Check browser console for any errors

### 4. Login with Different Account
- Go to `http://localhost:5173/login`
- Enter email and password
- Click "Login"

### 5. Test Other Role
- Create another account with "Owner" role
- Verify you can switch between user and owner dashboards

---

## API Documentation

### Base URL: `http://localhost:5000/api/v1`

### Register Endpoint
```
POST /auth/register

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"  // or "owner"
}

Response:
{
  "success": true,
  "message": "Registration successful! Please login.",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Login Endpoint
```
POST /auth/login

Request Body:
{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Get Profile Endpoint
```
GET /auth/profile

Headers:
Authorization: Bearer <token>

Response:
{
  "success": true,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "phone": null,
    "address": null,
    ...
  }
}
```

---

## Troubleshooting

### Issue: "Cannot POST /api/v1/auth/register"
- **Solution**: Ensure backend server is running on port 5000
- Check that Express app is properly configured

### Issue: "MongoDB connection failed"
- **Solution**: Check MongoDB is running
- Verify MONGODB_URI in .env file
- For MongoDB Atlas, ensure connection string is correct with username/password

### Issue: "Invalid token" error
- **Solution**: Token may have expired (7 days)
- Clear localStorage and login again
- Check JWT_SECRET in .env matches on backend

### Issue: "Email already registered"
- **Solution**: Use a different email address
- Or delete the user from MongoDB if testing

### Issue: CORS errors
- **Solution**: Ensure frontend URL (http://localhost:5173) is in backend CORS configuration
- Check server.js cors settings

### Issue: Password not hashing
- **Solution**: Ensure bcryptjs is installed: `npm install bcryptjs`
- Check User model pre-save hook is working

---

## File Structure

```
project-root/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── controllers/
│   │   └── authController.js    # Auth business logic
│   ├── middleware/
│   │   └── auth.js              # JWT authentication
│   ├── models/
│   │   └── User.js              # User schema
│   ├── routes/
│   │   └── authRoutes.js        # Auth endpoints
│   ├── .env                     # Environment variables
│   ├── .env.example             # Example env file
│   ├── package.json             # Dependencies
│   └── server.js                # Entry point
│
├── src/
│   ├── pages/
│   │   └── auth/
│   │       ├── Register.jsx     # Registration page
│   │       └── Login.jsx        # Login page
│   ├── api/
│   │   └── api.jsx              # Axios instance
│   ├── utils/
│   │   ├── auth.js              # Auth utilities
│   │   └── validators.js        # Form validation
│   └── ...
│
└── package.json
```

---

## Next Steps

1. **Implement forgot password functionality**
2. **Add email verification**
3. **Create user profile update endpoint**
4. **Add role-based access control for other pages**
5. **Implement vehicle listing/booking functionality**
6. **Add payment integration**

---

## Security Notes

- ✅ Passwords hashed with bcryptjs (10 salt rounds)
- ✅ JWT tokens with expiration (7 days)
- ✅ Password excluded from API responses
- ✅ CORS properly configured
- ✅ Environment variables for sensitive data

**For Production:**
- Change JWT_SECRET to a strong, unique value
- Set NODE_ENV=production
- Use HTTPS instead of HTTP
- Enable CSRF protection
- Add rate limiting
- Implement email verification
- Use MongoDB Atlas with strong credentials

---

## Need Help?

- Check browser console (F12) for frontend errors
- Check terminal for backend errors
- Verify network requests in DevTools Network tab
- Check MongoDB collections using MongoDB Compass or Atlas UI
