# Chat App

This is a simple chat application built using Node.js, Express, and Socket.io. Users can enter messages in real-time, and all connected clients receive updates instantly. Below are the instructions on how to set up and run the application.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download Node.js]

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/2058govindsingh/chat-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd chat-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the Application

1. **Start the server:**

   ```bash
   npm start
   ```

2. **Open your web browser and go to [http://localhost:9000](http://localhost:9000).**

3. **Enter a message in the input field and click the "Send" button.**

4. **Open another browser window or tab and repeat step 3. You should see messages sent from one window reflected in real-time in the other window.**

## Project Structure

- **index.html**: The main HTML file containing the structure of the chat application.

- **index.js**: The server-side JavaScript file responsible for handling socket connections and serving the HTML file.

- **public**: Directory containing static files, including the main HTML file and client-side scripts.

## Technologies Used

- **Node.js**: A JavaScript runtime for server-side development.

- **Express**: A minimal and flexible Node.js web application framework.

- **Socket.io**: A library for real-time web applications, enabling bidirectional communication between web clients and servers.

## Additional Notes

- The application uses Socket.io to establish a WebSocket connection between the server and clients, allowing real-time communication.

- Messages sent by users are broadcasted to all connected clients, and the sender's socket ID is included in the message.

Feel free to customize and extend this chat application based on your needs!
