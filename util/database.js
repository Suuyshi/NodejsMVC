//==> to connect to db mysql without sequelize
// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "Root@sarah1",
//   database: "node-complete",
// });

// module.exports = pool.promise();

//==> to connect to db mysql with sequelize
const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Root@sarah1", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
