require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "Gizmogizmo1!",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "Gizmogizmo1!",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
