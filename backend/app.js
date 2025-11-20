import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

const app = express();

// Load environment variables
config({ path: "./config/config.env" });

// Enable CORS for frontend URLs
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL_ONE || "https://mediserve-frontend.netlify.app",
      process.env.DASHBOARD_URL_TWO || "https://mediserve-dashboard.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
  })
);

// API routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Connect to database
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
