Frontend Case Study - Profile Viewer with Map Integration

🚀 Project Overview

This project is a React Vite web application that allows users to view a list of profiles and explore their locations interactively on a map. The admin panel includes functionalities to add, update, and delete profiles (local state only, no server changes) with authentication for admin access.

🛠️ Tech Stack

React Vite – Fast frontend framework

Tailwind CSS – Styling & responsive design

Axios – API requests

Redux Toolkit – State management

Google Maps API – Interactive map integration

DummyJSON API – Mock user data

✨ Features

Profile Display: Shows a list of profiles with name, photo, and description.

Interactive Map: Displays the location of selected profiles using Google Maps.

CRUD Operations: Add, edit, and delete profiles (local state only, no backend changes).

Admin Panel with Authentication: Only authenticated admins can modify profiles.

Search & Filter: Find profiles by name, age, comapny name, designation, location.

Responsive Design: Works on mobile and desktop.


🏗️ Installation & Setup

1. Install Dependencies
        npm install

2. Run the development server
        npm run dev

📡 API Integration

This project uses DummyJSON API for profile data. Since DummyJSON does not store changes permanently, CRUD operations are handled locally using Redux Toolkit.

API Endpoints Used:

Get Users: https://dummyjson.com/users

Get User by ID: https://dummyjson.com/users/:id

Add User : 'https://dummyjson.com/users/add'

Update User : 'https://dummyjson.com/users/:id' 

Delete User (Local Only)

🔒 Admin Authentication

Basic authentication is implemented using hardcoded credentials:

Username: admin

Password: admin

Only logged-in admins can access the Admin Panel to modify profiles.

Admins can logout securely.

📍 Google Maps Integration

Uses Google Maps API to display user locations.

Clicking the "Summary" button on a profile shows the address on the map.

🎯 Future Enhancements

Persist CRUD operations using a real backend (MongoDB/Express.js).

Implement role-based access control for different user types.

Improve UI with more animations and UX enhancements.
