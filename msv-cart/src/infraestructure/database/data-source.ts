import { AppDataSource } from "../../config/ormconfig";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  export const dataSource = AppDataSource;