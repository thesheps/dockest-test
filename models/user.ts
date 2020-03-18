import Sequelize from "sequelize";

const config = require("../config/config");

// @ts-ignore
const sequelize = new Sequelize(config.test);

export const UserModel = sequelize.define("User", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING
});
