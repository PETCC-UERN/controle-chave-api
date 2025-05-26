import { Request, Response } from 'express';
import userService from '../services/user.service';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user =  userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }

};


export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
  
};