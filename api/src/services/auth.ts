import User from '../models/User';
import logger from '../util/logger';
import generateToken from '../util/generateToken';

const NAMESPACE = 'auth-service';

const createUser = async (
	email: string,
	password: string,
	username: string,
	roleId: Number
): Promise<Number> => {
	const user = User.build({
		name: username,
		password: password,
		email: email,
		role: roleId,
	});

	let userExists;

	try {
		userExists = await User.findOne({ where: { email: email } });
	} catch (error: any) {
		logger.warn(NAMESPACE, 'failed to get user by email', error);
	}

	if (userExists) {
		logger.error(NAMESPACE, 'user already exists');
		throw new Error('Email already in use');
	}

	await user.save();
	return user.id;
};

const login = async (email: string, password: string): Promise<string> => {
	const user = await User.findOne({
		where: {
			email: email,
		},
	});
	let isValid = false;

	if (user) {
		isValid = await user.verifyPassword(password);
	} else {
		logger.error(NAMESPACE, `user (${email}) not found`);
		throw new Error('User not found');
	}

	if (!isValid) throw new Error('Invalid credentials');
	return generateToken(user);
};

export default {
	createUser,
	login,
};
