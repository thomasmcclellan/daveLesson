require('dotenv').config()
console.log(process.env)
module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
}
