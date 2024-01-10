import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import service from '../services/auth';

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
	const { email, password, username, roleId } = req.body;
	let id: Number;

	if (!email || !password || !username || !roleId) {
		return res.status(400).send({
			message: 'Required fields missing',
		});
	}

	try {
		id = await service.createUser(email, password, username, roleId);
		return res.status(201).send({
			message: 'User created',
			id: id,
		});
	} catch (error: any) {
		return res.status(400).send({
			error: error.message,
		});
	}
};

const login = async (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).send({
			message: 'Required fields missing',
		});
	}

	try {
		const token = await service.login(email, password);
		return res.status(200).send({
			token,
		});
	} catch (error: any) {
		return res.status(400).send({
			error: error.message,
		});
	}
};

export default {
	registerUser,
	login,
};
