import { Express } from 'express';
import express from 'express';
import cors from 'cors';
import config from './config/config';
import { exit } from 'process';
import db from './config/db';

import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import roleRoutes from './routes/roles';

declare global {
	namespace Express {
		interface Request {
			userId: Number;
			userRole: string | undefined;
		}
	}
}

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/roles', roleRoutes);

(async () => {
	try {
		await db.authenticate();
		console.log('Connected to database');
	} catch (error) {
		console.log('failed to connect to database', error);
		exit(1);
	}
})();

app.listen(config.httpPort, () => {
	console.log(`Listening for requests on port ${config.httpPort}`);
});
