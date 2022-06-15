import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export const ENVIRONMENT = process.env.NODE_ENV || "development";
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRY = process.env.JWT_EXPIRY;
export const DB_URI = process.env.DB_URI;
