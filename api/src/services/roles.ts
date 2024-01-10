import Role from '../models/Role';
import logger from '../util/logger';

const NAMESPACE = 'roles-service';

const getRoles = async (): Promise<Role[]> => {
	return await Role.findAll();
};

export default {
	getRoles,
};
