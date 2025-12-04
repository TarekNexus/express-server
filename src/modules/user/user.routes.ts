import express from 'express';
import { UserControllers } from './user.controller';
const router=express.Router()
// app.use("/users",userRoutes)
router.post("/",UserControllers.createUser);
router.get("/",UserControllers.getUser)
router.get("/:id",UserControllers.getSingleUser)
router.put("/:id",UserControllers.updatedUser)
router.delete("/:id",UserControllers.deleteUser)


export const userRoutes=router;

