// Imports

import express from "express";
import { env } from "./config/env.js";
import { connectDB } from "./config/database.js";

// Import Routes.

import userRoutes from "./routes/user.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";
import eventRoutes from "./routes/event.routes.js";

const app = express();

app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/events", eventRoutes);

app.listen(env.PORT, () => {

    connectDB()
    .then(() => console.log("Base de datos conectada."));
    
    console.log(`Server ON. Puerto: ${env.PORT}`);
});