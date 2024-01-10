import { Request, Response, NextFunction } from 'express';
import Role from '../models/Role';
import service from '../services/roles';

const getRoles = async (req: Request, res: Response, next: NextFunction) => {
	let roles;
	try {
		roles = await service.getRoles();
	} catch (error: any) {
		return res.status(400).send({
			error: error.message,
		});
	}
	return res.send({ roles });
};

export default {
	getRoles,
};
