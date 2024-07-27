import { dataSource } from "../../database/data-source";
import { User } from "../../../domain/entities/User";

export const userRepository = dataSource.getRepository(User);
