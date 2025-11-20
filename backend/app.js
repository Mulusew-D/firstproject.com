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
config({ path: "./config/config.env" });

/* ------------ CORS FIX (VERY IMPORTANT) ------------- */
app.use(
  cors({
    origin: [
      "https://mediserve-ruddy.vercel.app",     // Frontend
      "https://mediserve-dashboard.vercel.app", // Dashboard
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Required for allowing browser cookies via CORS
app.options("*", cors());

/* ------------ MIDDLEWARES ------------- */
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

/* ------------ ROUTES ------------- */
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

/* ------------ DATABASE CONNECTION ------------- */
dbConnection();

/* ------------ ERROR HANDLING ------------- */
app.use(errorMiddleware);

export default app;
