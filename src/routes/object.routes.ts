import { Router } from 'express';
import { listObject } from '../controllers/object.controller';

const router = Router();

router.get('/', listObject);
// Cria um usuário


export default router;