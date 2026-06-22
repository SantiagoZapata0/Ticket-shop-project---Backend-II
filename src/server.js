import { env } from "./config/env.js";
import { connectDB } from "./config/database.js";

connectDB()
.then(() => console.log("Base de datos conectada."))
.catch((err) => console.error("Error al conectar la base de datos:", err))

app.listen(env.PORT, () => {
    console.log(`Server ON. Puerto: ${env.PORT}`);
});