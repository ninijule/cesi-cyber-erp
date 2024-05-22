import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('postgres://' + process.env["DB_USER"] + ':' + process.env["DB_PASSWORD"] + '@' + process.env["DB_IP"] + ':5432/' + process.env["DB_DATABASE_NAME"]);

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
