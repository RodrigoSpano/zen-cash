export default () => ({
  app: {
    node_env: process.env.NODE_ENV,
  },
  postgres: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dbname: process.env.DB_NAME,
  },
});
