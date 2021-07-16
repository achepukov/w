import { DataTypes } from 'sequelize';
import sequelize from './instance';

export const WatchListWord = sequelize.define('WatchListWord', {
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

WatchListWord.sync({ alter: true });