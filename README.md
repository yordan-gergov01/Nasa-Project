# Nasa-Project

## Overview

The NASA Project is a full-stack web application that leverages NASA's Exoplanet Archive API to identify potentially habitable exoplanets and manage upcoming space missions. The application features a React-based front-end and a Node.js/Express back-end, with MongoDB for data persistence.

## Features

- **Planetary Data Retrieval:** Fetches data from NASA's Exoplanet Archive and filters for potentially habitable planets.

- **Mission Management:** Allows users to schedule upcoming missions, including information such as mission date, rocket name, and target planet.

- **Data Persistence:** Stores mission data using MongoDB for efficient management and retrieval.

- **Secure API:** Utilizes security best practices like sanitizing inputs, managing CORS, and logging requests.


## Technologies Used

- **React:** For building the interactive user interface.

- **Node.js:** JavaScript runtime for server-side development.

- **Express.js:** Web framework for building RESTful APIs.

- **MongoDB:** NoSQL database for storing mission data.

- **Mongoose:** ODM library for MongoDB.

- **dotenv:** Loads environment variables for configuration.

- **CORS:** Enables cross-origin resource sharing.

- **Morgan:** HTTP request logger middleware.

- **CSV-Parse:** Parses CSV data for processing planet information.

- **PM2:** Process manager for running and monitoring the application.

- **Axios:** For making HTTP requests.


## Installation

1. Clone the repository:
   git clone https://github.com/yordan-gergov01/Nasa-Project.git

2. Navigate to the project directory:
   cd Nasa-Project

3. Install dependencies for the server:
   cd server
   npm install

4. Install dependencies for the client:
   cd ../client
   npm install
