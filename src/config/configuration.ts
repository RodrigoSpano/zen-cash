export default () => ({
  app: {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
  },
  postgres: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dbname: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
});
