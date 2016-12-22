var config = require('./config');

module.exports = {
  client: 'pg',
  connection: config.database_url,
  migrations: {
    tableName: 'migrations',
    directory: './migrations'
  }
}
