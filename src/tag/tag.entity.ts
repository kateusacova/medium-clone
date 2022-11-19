import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tags'}) // can specify table name as such
export class TagEntity { // if name not specified, table will be named Tag
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}