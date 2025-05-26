import { Request, Response } from 'express';
import objectService from '../services/object.service';

export const listObject = async (req: Request, res: Response) => {
  try {
    const objects = await objectService.listObject();
    res.status(200).json(objects);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};