import {DataTypes, Model} from 'sequelize';
import sequelize from '../index';


class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

}


export default Car.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
    price: {type: DataTypes.FLOAT},
    is_active: {type: DataTypes.BOOLEAN},

}, {
    sequelize,
    modelName: 'Car',
    tableName: 'car',
    updatedAt: false,
    createdAt: true
});


