// Imports

import express from "express";

// Import Routes.

import userRoutes from "./routes/user.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";
import eventRoutes from "./routes/event.routes.js";
import sessionRouter from "./routes/session.routes.js"

const app = express();

// ! Middlewares

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    const date = new Date();
    console.log(`${date.toLocaleString("es-AR")} - ${req.method}`);
    next();
})

app.get("/api/health", (req, res) => {
    res.json({status: "ok", payload: "Servidor activo"})
})

// ! Routes

app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/session", sessionRouter);

export default app;