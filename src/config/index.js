import sequelize from "sequelize";

const newSequelize = new sequelize(
  "postgres://postgres:1234@localhost:5432/dars30",
  { logging: false }
);

export { newSequelize };
