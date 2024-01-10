import bcrypt from 'bcryptjs';
import config from '../config/config';
import Role from './Role';
import sequelize from '../config/db';

import { Model, CreationOptional, ForeignKey, DataTypes } from 'sequelize'; 

class User extends Model{
  declare id: CreationOptional<number>;
  declare name: string;
  declare password: string;
  declare email: string; 
  declare role: ForeignKey<Role['id']>
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  static async hashPassword(user:User) {
		let salt = await bcrypt.genSalt(config.saltRounds);
		let hash = await bcrypt.hash(user.password, salt);
		user.password = hash;
	}
  async verifyPassword(pass: string): Promise<boolean> {
		return await bcrypt.compare(pass, this.password);
	}
}


User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: new DataTypes.STRING(255),
    allowNull: false
  },
  password: {
    type: new DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: new DataTypes.STRING(255),
    allowNull: false
  },
  role:  {
    type: new DataTypes.INTEGER(),
    allowNull: false
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
},{
  sequelize,
  tableName: 'users',
  hooks: {
    beforeCreate: User.hashPassword
  }
});

export default User