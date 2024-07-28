import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Size {
    @PrimaryGeneratedColumn()
    id: number | undefined;
    
    @Column({ type: "int", nullable: true })
    product_id: number | undefined;

    @ManyToOne(() => Product, product => product.id)
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