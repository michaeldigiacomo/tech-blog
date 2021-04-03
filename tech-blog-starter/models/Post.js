const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

// TODO: YOUR CODE HERE
Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  { sequelize }
);

module.exports = Post;
