// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://nab:password@localhost:5432/postgres',
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'books'
    },
    seeds: { directory: './database/seeds' }
  }
};
