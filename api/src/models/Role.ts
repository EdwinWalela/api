import sequelize from '../config/db';
import { Model, CreationOptional, DataTypes } from 'sequelize'; 

class Role extends Model{
  declare id: CreationOptional<number>;
  declare name: string;
}

Role.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: new DataTypes.STRING(255),
    allowNull: false
  },
},{
  sequelize,
  tableName: 'roles'
})

export default Role