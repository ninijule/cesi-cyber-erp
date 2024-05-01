import {DataTypes, Model} from 'sequelize';
import sequelize from '../index';


class Process extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

}


export default Process.init({
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.FLOAT},
    is_active: {type: DataTypes.BOOLEAN},

}, {
    sequelize,
    modelName: 'Process',
    tableName: 'process',
});


