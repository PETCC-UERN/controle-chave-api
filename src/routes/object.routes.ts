import {Router} from 'express';
import {createObject} from '../controllers/object.controller';

const router = Router();

router.post("/create",createObject);

export default router;