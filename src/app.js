import express from "express";
import morgan from "morgan";

// Routes
import citiesRoutes from "./routes/cities.routes";


const app = express();

// Settings
app.set("port", 4000);


// Middlewares
app.use(morgan("dev"));
app.use(express.json());


// Routes
app.use("/api/cities", citiesRoutes);



export default app;