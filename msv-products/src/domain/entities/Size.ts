import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Size {
  @PrimaryColumn()
  product_id: number | undefined;

  @OneToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product: Product;

  @Column()
  size: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column()
  stock: number;

  constructor(product: Product, size: string, price: number, stock: number) {
    this.product_id = product !== undefined ? product.id : 0;
    this.product = product;
    this.size = size;
    this.price = price;
    this.stock = stock;
  }
}