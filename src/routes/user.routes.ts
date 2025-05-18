import { Router } from 'express';
import { createUser } from '../controllers/user.controller';

const router = Router();

router.post('/', createUser);

export default router;