'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('user', [{
            firstName: 'Bob',
            lastName: 'Page',
            email: 'admin@cesi.fr',
            password: '5e761456804e455ece24468b010043d8',
            is_admin: true,
            salary: 55000,
            createdAt: new Date()
        }], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('user', { email: 'admin@cesi.fr' }, {});

    }
};