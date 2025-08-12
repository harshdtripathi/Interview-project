import { io } from "socket.io-client";

// Replace with your backend URL if deployed
const socket = io("http://localhost:3000", {
  transports: ["websocket"], // ensures websocket is used
});

export default socket;
