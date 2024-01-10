import express from 'express';
import controller from '../controllers/auth';
import isAuthenticated from '../middelware/isAuthenticated';
import isAdmin from '../middelware/isAdmin';

const router = express.Router();

// In prod: Register should be limited to Admin
// router.post('/register', isAuthenticated, isAdmin, controller.registerUser);
router.post('/register', controller.registerUser);
router.post('/login', controller.login);

export default router;
