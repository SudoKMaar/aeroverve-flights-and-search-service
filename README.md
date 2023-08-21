# AeroVerve - Flight and Search Microservice

Welcome to the Flight and Search Microservice of AeroVerve, a cutting-edge flight booking system designed to offer users seamless and efficient flight booking experiences. This microservice is a fundamental component of AeroVerve, responsible for managing flight details, bookings, and related services. Built on a robust architecture, it ensures smooth interactions between users, flights, and booking processes.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- - [Create, retrieve, update, and delete flights.](#create-retrieve-update-and-delete-flights)
- - [Perform flight searches based on various filters.](#perform-flight-searches-based-on-various-filters)
- - [Database-backed storage for flight and search data.](#database-backed-storage-for-flight-and-search-data)
- - [Modular and maintainable codebase using the Node.js ecosystem.](#modular-and-maintainable-codebase-using-the-nodejs-ecosystem)
- - [Separation of concerns using a structured architecture.](#separation-of-concerns-using-a-structured-architecture)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- - [1. Environment Variables](#1-environment-variables)
- - [2. Database Configuration](#2-database-configuration)
- - [3. Starting the Service](#3-starting-the-service)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Flight and Search Microservice is a core component of AeroVerve's flight booking system, enabling travelers to seamlessly explore flight options, make bookings, and efficiently manage their travel plans. Powered by advanced technologies, this microservice delivers real-time flight information, a secure booking process, and comprehensive booking management capabilities.

## Features

### Create, retrieve, update, and delete flights.

The microservice allows the management of flight data, including creating new flights, retrieving flight details, updating flight information, and deleting flights from the system.

### Perform flight searches based on various filters.

Users can perform flight searches based on filters such as departure and arrival airports, dates, and pricing ranges. This feature empowers users to find flights that match their preferences.

### Database-backed storage for flight and search data.

Flight and search data is stored in a MySQL database, ensuring data durability and efficient retrieval. This provides a reliable foundation for managing flight-related information.

### Modular and maintainable codebase using the Node.js ecosystem.

The microservice codebase is structured using the Node.js ecosystem, embracing modularity and maintainability. This enables efficient development, testing, and enhancement of features.

### Separation of concerns using a structured architecture.

The microservice follows an MVC (Model-View-Controller) architecture, ensuring a clear separation of concerns. This enhances code organization, readability, and scalability.

## Prerequisites

- Node.js (version 20.X.X)
- MySQL database (version 8.X.X)
- npm or yarn package manager

## Setup

Follow these steps to set up and run the AeroVerve Flight and Search Microservice on your local machine.

### 1. Environment Variables

1. Copy the `.env.example` file in the microservice directory to `.env`.

### 2. Database Configuration

1. Inside the `src/config` folder of the microservice, create a new file named `config.json`.
2. Add the database connection details in the `config.json` file, following the provided example.

```json
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "<YOUR_DB_NAME>",
    "host": "<YOUR_DB_HOST_NAME>",
    "dialect": "mysql"
  }
}
```

Replace the placeholders with your actual database credentials and information.

### 3. Starting the Service

1. Open a terminal and navigate to the microservice directory.

```bash
cd flight-and-search-service
```

2. Install the dependencies and start the microservice.

```bash
npm install
npm start
```

Certainly! Here are the added endpoints for the Flight and Search Microservice in the `Usage` section of your README:

## Usage

The following are the available endpoints:

### City Endpoints

- **Create a City**

  ```
  POST /api/v1/city
  ```

- **Delete a City**

  ```
  DELETE /api/v1/city/:id
  ```

- **Get City by ID**

  ```
  GET /api/v1/city/:id
  ```

- **Get All Cities**

  ```
  GET /api/v1/city
  ```

- **Update a City**
  ```
  PATCH /api/v1/city/:id
  ```

### Flight Endpoints

- **Create a Flight**

  ```
  POST /api/v1/flights
  ```

- **Get All Flights**

  ```
  GET /api/v1/flights
  ```

- **Get Flight by ID**

  ```
  GET /api/v1/flights/:id
  ```

- **Update a Flight**
  ```
  PATCH /api/v1/flights/:id
  ```

### Airport Endpoint

- **Create an Airport**
  ```
  POST /api/v1/airports
  ```

## Contributing

We welcome contributions to enhance the AeroVerve Flight and Search Microservice. To contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Create a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

AeroVerve - Elevating Flight Booking Experiences
