import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js";
import cors from "cors";

// config env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//miidlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`.bgCyan.white);
});
