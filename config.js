
module.exports = {
  port: process.env.PORT || 2420,
  environment: process.env.ENV || 'development',
  database_url: process.env.DATABASE_URL || 'postgres://localhost/wd',
  countryLimit: process.env.COUNTRY_LIMIT || 20,
  worldLimit: process.env.WORLD_LIMIT || 20
}
