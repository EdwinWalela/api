'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'roles',
			[
				{
					name: 'admin',
					createdAt: '2024-01-09T10:59:00.534Z',
					updatedAt: '2024-01-09T10:59:00.534Z',
				},
				{
					name: 'user',
					createdAt: '2024-01-09T10:59:00.534Z',
					updatedAt: '2024-01-09T10:59:00.534Z',
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('roles', null, {});
	},
};
