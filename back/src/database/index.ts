import {Sequelize} from 'sequelize';


const sequelize = new Sequelize('postgres://postgres:mysecretpassword@erp-database:5432/cesi');

export async function initDb() {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    try {
        await sequelize.sync();
    } catch (error) {
        console.error('Unable to sync sequelize :', error);
    }
    return sequelize;
}

export default sequelize;
