module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'landing-page-strapi-api-db'),
      user: env('DATABASE_USERNAME', 'landing-page-strapi'),
      password: env('DATABASE_PASSWORD', 'landing-page-strapi'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
