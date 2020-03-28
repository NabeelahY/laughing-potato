require('dotenv').config();
const knex = require('knex');

const env = process.env.DB_ENV || 'development'
const configOptions = require('../knexfile');

module.exports = knex(configOptions[env]);
