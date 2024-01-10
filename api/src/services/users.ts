import User from '../models/User';
import logger from '../util/logger';
const NAMESPACE = 'user-service';

const getUser = async (userId: Number): Promise<User | null> => {
	let user;

	try {
		user = await User.findOne({
			where: { id: userId },
			attributes: { exclude: ['password'] },
		});
	} catch (error: any) {
		logger.error(NAMESPACE, `failed to get userId(${userId}):`, error);
		return null;
	}
	return user;
};

const getUsers = async (): Promise<User[]> => {
	let users;

	try {
		users = await User.findAll({ attributes: { exclude: ['password'] } });
	} catch (error: any) {
		logger.error(NAMESPACE, `failed to get all users:`, error);
		return [];
	}
	return users;
};

export default {
	getUser,
	getUsers,
};
