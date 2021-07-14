import { DataTypes } from 'sequelize';
import sequelize from './instance';

export const Post = sequelize.define('Post', {
  Title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  Summary: {
    type: DataTypes.TEXT
  },
  Body: {
    type: DataTypes.TEXT
  },
});

Post.sync({ alter: true });