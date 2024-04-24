'use strict';
import {DataTypes, Model} from 'sequelize';
import sequelize from '../index';

class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

}

export default User.init({
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize,
    modelName: 'User',
    tableName: 'Users'
});


