import {config} from "dotenv";

config();

export default {
    host: process.env.DB_HOST || "",
    database: process.env.DB || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASS || "",
}