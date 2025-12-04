import express, { Request, Response } from "express";

import initDB from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { todoRoutes } from "./modules/todo/todo.routes";
import { authRoutes } from "./modules/auth/auth.routes";

const app = express();

// parser
app.use(express.json());
// app.use(express.urlencoded());

// initialize DB
initDB();

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Tareks World!");
});

// user crud
app.use("/users", userRoutes);
// todo crud
app.use("/todos", todoRoutes);

// auth routes
app.use("/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

export default app;
