import { Dockest, logLevel } from "dockest";

const dockest = new Dockest({
  jestLib: require("jest"),
  logLevel: logLevel.DEBUG
});

dockest.run([
  {
    serviceName: "postgres",
    commands: [
      "sequelize db:migrate:undo:all",
      "sequelize db:migrate",
      "sequelize db:seed:undo:all",
      "sequelize db:seed --seed 20190101001337-demo-user"
    ],
    readinessCheck: async ({
      defaultReadinessChecks: { postgres },
      dockerComposeFileService: {
        environment: { POSTGRES_DB, POSTGRES_USER }
      }
    }) =>
      Promise.all([
        (new Promise(resolve => {
          setTimeout(resolve, 50);
        }),
        postgres({ POSTGRES_DB, POSTGRES_USER }))
      ])
  }
]);
