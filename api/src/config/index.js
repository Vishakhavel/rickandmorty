// src/config/index.js
import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  dbURI: process.env.DB_URI,
  cacheTTL: parseInt(process.env.CACHE_TTL, 10) || 60, // Example: cache timeout
};
