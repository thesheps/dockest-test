import Sequelize from "sequelize";

import sequelize from "./sequelize";
import { UserModel } from "./user";

export const db = {
  sequelize,
  Sequelize,
  UserModel
};
