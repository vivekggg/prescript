# Prescripto - Medical Appointment System

A comprehensive medical appointment booking system with separate interfaces for patients, doctors, and administrators.

### Deployed Application

The application is deployed and accessible at the following URLs:

- *Backend API*:(https://prescripto-api.onrender.com)
- *Frontend*: (https://prescripto-app.vercel.app)
- *Admin Panel*:(https://prescripto-admin.vercel.app)

## Project Structure

```
prescripto/
├── backend/          # Express.js API server (Port: 4000)
├── frontend/         # Patient-facing React app (Port: 5173)
├── admin/           # Admin panel React app (Port: 5174)
└── package.json     # Root package with unified scripts
```

## Features

### Patient Frontend (Port 5173)

- Browse doctors by specialty
- Book appointments
- View appointment history
- User profile management
- Payment integration (Razorpay/Stripe)

### Admin Panel (Port 5174)

- Dashboard with analytics
- Manage doctors
- View all appointments
- Add new doctors
- Monitor system activity

### Backend API (Port 4000)

- RESTful API endpoints
- User authentication
- Doctor management
- Appointment booking
- Payment processing
- File upload (Cloudinary)

## Quick Start

### Prerequisites

- Node.js
- MongoDB
- Cloudinary account

### Installation

1. **Install all dependencies:**

   ```bash
   npm run install:all
   ```

2. **Set up environment variables:**

   Create `.env` file in the `backend` directory:

   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

3. **Start all services:**

   ```bash
   npm run dev
   ```

   This will start:

   - Backend API on http://localhost:4000
   - Frontend on http://localhost:5173
   - Admin panel on http://localhost:5174

### Individual Service Commands

- **Backend only:** `npm run backend`
- **Frontend only:** `npm run frontend`
- **Admin only:** `npm run admin`
- **Build all:** `npm run build`

## API Endpoints

### User Routes (`/api/user`)

- POST `/register` - User registration
- POST `/login` - User login
- GET `/profile` - Get user profile
- PUT `/profile` - Update user profile

### Doctor Routes (`/api/doctor`)

- POST `/register` - Doctor registration
- POST `/login` - Doctor login
- GET `/profile` - Get doctor profile
- PUT `/profile` - Update doctor profile
- GET `/appointments` - Get doctor appointments

### Admin Routes (`/api/admin`)

- POST `/login` - Admin login
- GET `/doctors` - Get all doctors
- POST `/doctors` - Add new doctor
- PUT `/doctors/:id` - Update doctor
- DELETE `/doctors/:id` - Delete doctor
- GET `/appointments` - Get all appointments

## Technology Stack

- **Frontend:** React 19, Vite, Tailwind CSS, React Router
- **Admin:** React 19, Vite, Tailwind CSS, React Router
- **Backend:** Express.js, MongoDB, Mongoose, JWT
- **Payments:** Razorpay, Stripe
- **File Upload:** Cloudinary
- **Authentication:** JWT tokens


