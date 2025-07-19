import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    forceNew: true,
    reconnectionAttempts: Infinity,
    timeout: 10000,
    transports: ["websocket", "polling"], // Allow fallback to polling
    withCredentials: true,
  };

  const backendUrl =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  return io(backendUrl, options);
};
