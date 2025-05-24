import { Router } from 'express';
import { createUser, deleteUser } from '../controllers/user.controller';

const router = Router();

// Cria um usuário
router.post('/user', createUser);

// Atualiza um usuário pelo id
// router.put('/users/:id', updateUser1);

// Deleta um usuário pelo id
router.delete('/user/:id', deleteUser);

export default router;