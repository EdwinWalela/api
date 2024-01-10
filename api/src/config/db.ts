import { Sequelize } from 'sequelize';
import config from './config';

const sequelize = new Sequelize({
	logging: false,
	dialect: 'postgres',
	database: config.db.db,
	username: config.db.user,
	password: config.db.pass,
	host: config.db.host,
	port: config.db.port,
});

export default sequelize;
