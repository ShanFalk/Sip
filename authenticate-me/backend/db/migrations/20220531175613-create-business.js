'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'}
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      lat: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      lng: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Businesses');
  }
};
