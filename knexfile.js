require('dotenv').config();
// Update with your config settings.
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://nab:password@localhost:5432/postgres',
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: { directory: './database/seeds' }
  },
  testing: {
    client: 'pg',
    connection: 'postgres://lambda:password@localhost:5432/testing',
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: { directory: './database/seeds' }
  }
};
