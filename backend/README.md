# Vehicle Rental Management System

A full-stack vehicle rental management system with role-based access control.

## Features

- User authentication and authorization
- Role-based access (Admin, Manager, Customer)
- Vehicle management
- Rental booking and management
- Responsive frontend with React

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

### Frontend
- React with TypeScript
- React Router
- Axios for API calls
- Vite for build tool

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd vehiclebackend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Update `config/config.env` with your MongoDB URL and other settings
   - Default MongoDB URL: `mongodb://localhost:27017/new_backend`

4. Start MongoDB service (if using local MongoDB)

5. Start the backend server:
   ```bash
   npm run dev
   ```
   Server will run on http://localhost:8000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Frontend will run on http://localhost:5173

## Usage

### User Roles

- **Customer**: Can browse vehicles, make rental requests, view their rentals
- **Manager**: All customer permissions + can manage vehicles, confirm/cancel rentals
- **Admin**: All manager permissions + can delete rentals and vehicles

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user info

#### Vehicles
- `GET /api/vehicles` - Get all vehicles
- `GET /api/vehicles/available` - Get available vehicles
- `GET /api/vehicles/:id` - Get single vehicle
- `POST /api/vehicles` - Create vehicle (admin/manager)
- `PUT /api/vehicles/:id` - Update vehicle (admin/manager)
- `DELETE /api/vehicles/:id` - Delete vehicle (admin/manager)

#### Rentals
- `GET /api/rentals` - Get rentals (filtered by role)
- `GET /api/rentals/:id` - Get single rental
- `POST /api/rentals` - Create rental request
- `PUT /api/rentals/:id/status` - Update rental status (admin/manager)
- `DELETE /api/rentals/:id` - Delete rental (admin only)

## Default Admin User

After setup, you can register users. The first user can be set as admin by manually updating the role in the database, or modify the registration logic to allow admin role selection.

## Development

- Backend uses nodemon for auto-restart
- Frontend uses Vite for fast development
- CORS is configured to allow requests from frontend (localhost:5173)

## Production Deployment

1. Build the frontend: `npm run build` in frontend directory
2. Serve the built files from backend or a web server
3. Update environment variables for production
4. Use a production MongoDB instance