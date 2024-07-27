import { User } from "../../domain/entities/User";
import { userRepository } from "../../infraestructure/database/repositories/UserRepository";

export class CreateUser {
  async execute(name: string, email: string): Promise<User> {
    const user = new User(name, email);
    return await userRepository.save(user);
  }
}
