import { productRepository } from "../../infraestructure/database/repositories/ProductRepository";

export class GetProducts {
  async execute(page: number) {
    return await productRepository.createQueryBuilder("Product").skip(6 * (page - 1)).take(6).getMany();
  }
}
