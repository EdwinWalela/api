'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the logic to create the 'roles' table
    await queryInterface.createTable('roles', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Add the logic to undo the 'createTable' operation
    await queryInterface.dropTable('roles');
  },
};
