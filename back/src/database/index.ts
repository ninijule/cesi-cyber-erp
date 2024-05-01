import {Sequelize} from 'sequelize';

//postgres://postgres:mysecretpassword@localhost:5432/cesi_development

const sequelize = new Sequelize('postgres://postgres:mysecretpassword@localhost:5432/cesi_development');

export async function initDb() {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    return sequelize;
}

export default sequelize;
