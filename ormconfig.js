const result = require("dotenv").config({
  path: "./.env",
});

if (result.error) {
  throw result.error;
}

module.exports = [
  {
    name: "development",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: process.env.DB_PASS,
    database: "testapi",
    synchronize: true,
    logging: ["query", "error"],
    entities: ["src/entity/*.ts"],
    migrations: ["src/migrations/*.ts"],
  },
  {
    name: "production",
    type: "mysql",
    host: "dougtestdba.mysql.database.azure.com",
    port: 3306,
    username: "doug",
    password: process.env.DB_PASS,
    database: "testapi",
    synchronize: true,
    logging: ["query", "error"],
    entities: ["build/entity/*.js"],
    ssl: {
      ca: process.env.SSL_CERT,
    },
  },
];

