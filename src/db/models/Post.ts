import { DataTypes } from 'sequelize';
import sequelize from './instance';

export const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(2048),
    allowNull: true
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
});

Post.sync({ alter: true });