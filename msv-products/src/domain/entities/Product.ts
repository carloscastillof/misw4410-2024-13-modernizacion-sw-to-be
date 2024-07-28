import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  title: string;

  @Column()
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
