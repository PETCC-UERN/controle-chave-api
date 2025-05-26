import { Router } from 'express';
import { createUser, deleteUser, updateUser, listUsers } from '../controllers/user.controller';

const router = Router();

router.get('/', listUsers);
// Cria um usuário
router.post('/', createUser);

// Atualiza um usuário pelo id
router.put('/:id', updateUser);

// Deleta um usuário pelo id
router.delete('/:id', deleteUser);

export default router;