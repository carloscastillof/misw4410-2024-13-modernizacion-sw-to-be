import { dataSource } from "../../database/data-source";
import { Product } from "../../../domain/entities/Product";

export const productRepository = dataSource.getRepository(Product);
