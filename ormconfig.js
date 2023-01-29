module.exports = [
  {
    name: "development",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "testApi",
    synchronize: true,
    logging: ["query", "error"],
    entities: ["src/entity/*.entity.ts"],
  },
  {
    name: "production",
    type: "mysql",
    host: "dougtestdba.mysql.database.azure.com",
    port: 3306,
    username: "doug",
    password: process.env.DB_PASS,
    database: "testApi",
    synchronize: true,
    ssl: {
      ca: process.env.SSL_CERT,
    },
    logging: ["query", "error"],
    entities: ["build/entity/*.entity.js"],
  },
];

