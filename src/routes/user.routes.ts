import { Router } from 'express';
import { createUser, deleteUser, updateUser } from '../controllers/user.controller';

const router = Router();

// Cria um usuário
router.post('/', createUser);

// Atualiza um usuário pelo id
router.put('/:id', updateUser);

// Deleta um usuário pelo id
router.delete('/:id', deleteUser);

export default router;