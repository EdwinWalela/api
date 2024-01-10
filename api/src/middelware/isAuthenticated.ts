import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import Role from '../models/Role';

const isAuthenticated = async (req:Request,res:Response,next:NextFunction) =>{
  const bearerHeader = req.headers['authorization'];
	if (typeof bearerHeader !== 'undefined') {
		const bearer = bearerHeader.split(' ');
		if (bearer.length !== 2) {
			res.status(403).send({
				error: 'Bearer token is malformed',
			});
			return;
		}

		const bearerToken = bearer[1];
		let decoded: any;

		try {
			decoded = jwt.verify(bearerToken, config.jwt.secret);
		} catch (error: any) {
			res.status(403).send({
				error: error.message,
			});
			return;
		}
		let role;
		try {
			role = await Role.findOne({ where:{ id : decoded.user.role} })
		} catch (error:any) {
			// TODO: Log warning
		}
		
		req.userId = decoded.user.id;
		req.userRole = role?.name;
		next();
	} else {
		res.status(403).send({
			error: 'Bearer token is required',
		});
		return;
	}
}

export default isAuthenticated