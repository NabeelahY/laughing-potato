require('dotenv').config();
// Update with your config settings.
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DEV_LOCAL,
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: { directory: './database/seeds' }
  },
  testing: {
    client: 'pg',
    connection: process.env.TEST_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: { directory: './database/seeds' }
  }
};
