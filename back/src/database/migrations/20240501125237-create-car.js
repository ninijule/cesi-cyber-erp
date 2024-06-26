'use strict';
const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('process', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {type: DataTypes.STRING},
            description: {type: DataTypes.STRING},
            price: {type: DataTypes.FLOAT},
            is_active: {type: DataTypes.BOOLEAN},
            img: {type: DataTypes.STRING},
            createdAt: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Processes');
    }
};