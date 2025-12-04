import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userServices } from "./user.service";

const createUser=async (req: Request, res: Response) => {
 
  try {
    const result = await userServices.createUser(req.body)
    
    // console.log(result.rows[0]);
    res.status(201).json({
      success: true,
      message: "Data Inserted Successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

const getUser=async (req: Request, res: Response) => {
  try {
    const result = await userServices.getuser()
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
const getSingleUser=async (req: Request, res: Response) => {

  try {
    const result = await userServices.getSingleUser(req.params.id as string);

    if (result.rows.length === 0) {
      res.status(500).json({
        success: false,
        message: "User not found!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Users retrieved successfully",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

const updatedUser=async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const result = await userServices.updatedUser(name,email,req.params.id as string)

    if (result.rows.length === 0) {
      res.status(500).json({
        success: false,
        message: "User not found!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Users updated  successfully",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
const deleteUser=async (req: Request, res: Response) => {
  try {
    const result = await userServices.deleteUser(req.params.id as string)

    if (result.rowCount === 0) {
      res.status(500).json({
        success: false,
        message: "User not found!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Users deteled successfully",
        data: result.rows,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
export const UserControllers={
    createUser,
    getUser,
    getSingleUser,
    updatedUser,
    deleteUser
}