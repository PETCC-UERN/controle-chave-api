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

export const deleteUser = async (req: Request, res: Response) => {
  const data = {id: req.params.id}
  try {
    const user = userService.deleteUser(data);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// export const updateUser1 = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const { name, email } = req.body; // espera receber { id, name?, email? }
    
//     if (!id) {
//       return res.status(400).json({ error: 'ID do usuário é obrigatório' });
//     }

//     const updatedUser = await userService.updateNameEmail({ id, name, email });

//     return res.json(updatedUser);
//   } catch (error: any) {
//     return res.status(400).json({ error: error.message || 'Erro interno' });
//   }
// };
