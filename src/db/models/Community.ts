import { DataTypes } from 'sequelize';
import sequelize from './instance';

export const Community = sequelize.define('Community', {
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(2048),
    allowNull: true
  },
});

Community.sync({ alter: true });