import express from 'express';
import { UserControllers } from './user.controller';
import logger from '../../middleware/logger';
import auth from '../../middleware/auth';
const router=express.Router()
// app.use("/users",userRoutes)
router.post("/",UserControllers.createUser);
router.get("/",logger,auth(),UserControllers.getUser)
router.get("/:id",UserControllers.getSingleUser)
router.put("/:id",UserControllers.updatedUser)
router.delete("/:id",UserControllers.deleteUser)


export const userRoutes=router;

