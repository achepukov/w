import { DataTypes } from 'sequelize';
import sequelize from './instance';

export const Tag = sequelize.define('Tag', {
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
});

Tag.sync({ alter: true });