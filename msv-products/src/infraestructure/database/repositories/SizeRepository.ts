import { dataSource } from "../../database/data-source";
import { Size } from "../../../domain/entities/Size";

export const sizeRepository = dataSource.getRepository(Size);
