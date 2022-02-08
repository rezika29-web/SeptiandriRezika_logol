const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

// membuat module
const db = {};

// sequelize
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// model
db.karyawan = require("./karyawan.model")(sequelize, Sequelize);
module.exports = db;