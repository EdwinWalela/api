import express from 'express';
import controller from '../controllers/roles';

const router = express.Router();

router.get('/', controller.getRoles);

export default router;
