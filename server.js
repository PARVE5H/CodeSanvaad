import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const userSocketMap = {};
const roomCodeMap = {}; // Store code for each room

function getAllConnectedClients(roomId) {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        username: userSocketMap[socketId],
      };
    }
  );
}

// Configure CORS for Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Your React app URL
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Enable CORS for Express routes
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Socket.IO server is running!");
});

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  // Handle joining a room
  socket.on("join", ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId);
    console.log(`${username} joined the room with id: ${roomId}`);

    //  Send latest code to the user who just joined
    const latestCode = roomCodeMap[roomId] || "";
    setTimeout(() => {
      io.to(socket.id).emit("sync-code", { code: latestCode });
    }, 100);

    // Notify all clients about the new joiner
    const clients = getAllConnectedClients(roomId);
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit("joined", {
        clients,
        username,
        socketId: socket.id,
      });
    });
  });

  // Update roomCodeMap on every code-change
  socket.on("code-change", ({ roomId, code }) => {
    roomCodeMap[roomId] = code;
    socket.in(roomId).emit("code-change", { code });
  });

  // Handle disconnection
  socket.on("disconnecting", () => {
    const rooms = [...socket.rooms];
    const username = userSocketMap[socket.id];
    const roomId = rooms.find((room) => room !== socket.id); // Filter out socket ID
    console.log(`${username} disconnected from room ${roomId}`);

    rooms.forEach((roomId) => {
      socket.in(roomId).emit("disconnected", {
        socketId: socket.id,
        username: userSocketMap[socket.id],
      });
    });
    delete userSocketMap[socket.id];
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Socket.IO server ready for connections`);
});
