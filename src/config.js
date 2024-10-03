import { config } from "dotenv";

config();

// express
export const PORT = process.env.PORT || 3000;