import express from "express"
import controller from "../controllers/users"
import isAuthenticated from '../middelware/isAuthenticated'
import isAdmin from "../middelware/isAdmin"

const router = express.Router()

router.get('/',isAuthenticated, isAdmin, controller.getUsers);
router.get('/:id',isAuthenticated, controller.getUser);

export default router