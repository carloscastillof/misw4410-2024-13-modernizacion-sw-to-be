import { userRepository } from "../../infraestructure/database/repositories/UserRepository";

export class GetUser {
  async execute(id: number) {
    return await userRepository.findOneBy({ id });
  }
}
