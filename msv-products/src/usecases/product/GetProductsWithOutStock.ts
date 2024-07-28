import { sizeRepository } from "../../infraestructure/database/repositories/SizeRepository";
import { productRepository } from "../../infraestructure/database/repositories/ProductRepository";
import { Product } from "../../domain/entities/Product";
import { Size } from "../../domain/entities/Size";

export class GetProductsWithOutStock {
  async execute() {
    const sizes = await sizeRepository.createQueryBuilder("size")
      .leftJoinAndSelect("size.product", "product")
      .where("size.stock = :stock", { stock: 0 })
      .getMany();

    return sizes.map(size => ({
      product_id: size.product.id,
      size: size.size,
      price: size.price,
      stock: size.stock,
      id: size.id,
      title: size.product.title,
      description: size.product.description
    }));
  }
}
