import Sequelize from "sequelize";

import config from "../config/config";

// @ts-ignore
export default new Sequelize(config.test);
