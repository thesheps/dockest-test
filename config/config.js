const config = {
  database: "dockest-test",
  username: "admin",
  password: "admin",
  host: "localhost",
  port: 5433,
  dialect: "postgres",
  logging: false
};

module.exports = {
  development: { ...config },
  test: { ...config }
};
