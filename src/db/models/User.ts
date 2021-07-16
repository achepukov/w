import { DataTypes } from 'sequelize';
import sequelize from './instance';

export const USER_ROLES: { [key: string]: string } = {
  SUPER_MODERATOR: 'SUPER_MODERATOR',
  MODERATOR: 'MODERATOR',
}

export const User = sequelize.define('User', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING(2),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(320),
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM(...Object.keys(USER_ROLES)),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(2048),
    allowNull: true
  },
});

User.sync({ alter: true });