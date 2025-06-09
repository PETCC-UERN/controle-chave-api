import { Request, Response } from 'express';
import objectService from '../services/object.service';

export const createObject = async (req: Request, res: Response) => {
    try {
        const object = objectService.createObject(req.body);
        res.status(201).json(object)
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

export default{
    createObject
}