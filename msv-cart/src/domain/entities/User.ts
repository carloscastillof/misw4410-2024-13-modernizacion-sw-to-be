import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  name: string;

  @Column()
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
