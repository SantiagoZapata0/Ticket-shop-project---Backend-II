// Imports

import express from "express";

// Import Routes.

import userRoutes from "./routes/user.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";
import eventRoutes from "./routes/event.routes.js";
import healthRoutes from "./routes/health.routes.js"

const app = express();

app.use((req, res, next) => {
    const date = new Date();
    console.log(`${date.toLocaleString("es-AR")} - ${req.method}`);
    next();
})

app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/health", healthRoutes);