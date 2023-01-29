import { DataSource } from "typeorm";
const ormConfig = require("../ormconfig.js");

export const createTypeormConn = new DataSource(
  ormConfig.find((element) => element.name == process.env.NODE_ENV.trim())
);

