import { DataSource } from "typeorm";
import { User } from "../domain/entities/User";
import { Product } from "../domain/entities/Product";
import { Size } from "../domain/entities/Size";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3308,
  username: "user",
  password: "password",
  database: "products",
  synchronize: true,
  logging: false,
  entities: [User, Product, Size],
  migrations: [],
  subscribers: [],
});
