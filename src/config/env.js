import dotenv from "dotenv";

dotenv.config();

export const env = {
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET,
    EXPIRES_IN: process.env.EXPIRES_IN
}
