const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    console.log("A new user message: ", message);
    io.emit('message', `${socket.id}: ${message}`);
  });
});

// Express
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("./public/index.html");
});

server.listen(9000, () => console.log(`Server started at PORT: 9000`));
