<!-- # Notes Management Web Application

A simple web application for managing notes with functionalities to **add** and **delete** notes. The data is stored in a MySQL database, and the application features a clean, responsive, and user-friendly interface.

## Features

- **Add Notes**: Create new notes and save them to the database.
- **Delete Notes**: Remove notes from the database.
- **Responsive Design**: Minimal and accessible design for better usability.

## Project Structure

### Backend

#### Tech Stack:
- **Node.js**: Backend server environment.
- **Express**: For building the API.
- **Sequelize ORM**: For MySQL integration.
  
#### Scripts:
- **dev**: Start the backend server in development mode.
- **sync-db**: Synchronize the database schema with Sequelize.

### Frontend

#### Tech Stack:
- **React.js**: For building the user interface.
- **Axios**: For API communication.
- **Tailwind CSS**: For styling.

#### Scripts:
- **dev**: Start the development server.
- **build**: Build the frontend for production.
- **preview**: Preview the production build locally.

## How to Run the Application

### Prerequisites:
- Install **Node.js** (v16 or above).
- Install **MySQL**.
- Ensure **npm** or **yarn** is available on your system.

---

### Backend Setup

1. **Navigate to the backend directory**:

    ```bash
    cd backend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up a `.env` file** with the following details:

    ```env
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    PORT=8080
    CORS_ORIGIN=
    ```

4. **Sync the database**:

    ```bash
    npm run sync-db
    ```

5. **Start the backend server**:

    ```bash
    npm run dev
    ```

---

### Frontend Setup

1. **Set up a `.env` file (Frontend)** with the following details:

    ```env
    VITE_API_URL=http://localhost:8080
    ```

2. **Navigate to the frontend directory**:

    ```bash
    cd client
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm run dev
    ```

---

## Key Dependencies

### Backend:
- **Express**: For building the API.
- **Sequelize**: ORM for MySQL integration.
- **bcryptjs**: For password hashing (if authentication is added).
- **dotenv**: For environment variable management.

### Frontend:
- **React.js**: For building the user interface.
- **Axios**: For making API calls.
- **Tailwind CSS**: For styling the application.

## Notes

- Ensure the backend server is running before accessing the frontend.
- Update the API base URL in the frontend (e.g., `axios.defaults.baseURL`) to match the backend server URL.

---

## Author

This project is part of a technical assignment to demonstrate full-stack development skills. -->
