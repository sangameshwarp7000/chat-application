# 💬 Real-Time Chat Application

A full-stack real-time chat application built using **Spring Boot** and **React**. Users can create chat rooms, join existing rooms, and exchange messages instantly through WebSocket communication.

## 🚀 Features

* Create new chat rooms
* Join existing chat rooms using a room ID
* Real-time messaging using WebSocket and STOMP
* Room-based message broadcasting
* View chat messages with timestamps
* User-friendly and responsive interface
* Random profile avatars for chat users

## 🛠️ Tech Stack

### Backend

* Java
* Spring Boot
* Spring WebSocket
* STOMP
* REST APIs
* MongoDB

### Frontend

* React
* Vite
* JavaScript
* Tailwind CSS
* Axios
* SockJS
* STOMP.js

## 🏗️ Project Structure

```text
chat-application/
├── chat-backend/
│   └── Spring Boot application
│
├── chat-frontend/
│   └── React application
│
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Java (JDK 17 or later)
* Node.js and npm
* MongoDB
* Git

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>
```

### 2. Run the Backend

Navigate to the backend directory:

```bash
cd chat-backend
```

Configure your MongoDB connection in `application.properties`:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/chatapp
```

Start the Spring Boot application:

```bash
./mvnw spring-boot:run
```

On Windows, use:

```bash
mvnw.cmd spring-boot:run
```

The backend runs at:

```text
http://localhost:8080
```

### 3. Run the Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd chat-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

## 🔄 Application Workflow

1. Enter a username.
2. Create a new room or enter an existing room ID.
3. Join the room.
4. Send messages in the chat interface.
5. Messages are broadcast to connected users in the same room in real time.

## 🧩 Architecture

* **React frontend:** Handles the user interface, room selection, and chat interactions.
* **Spring Boot backend:** Provides REST APIs for room management.
* **WebSocket with STOMP:** Enables real-time message communication.
* **MongoDB:** Stores room and message data.

## 📌 Future Enhancements

* User authentication and authorization
* Private messaging between users
* Online/offline user status
* Message delivery and read receipts
* Image and file sharing
* Improved chat history and pagination

## 👨‍💻 Author

**Sangameshwar Pippadapally**

---

⭐ If you find this project useful, consider giving it a star!
