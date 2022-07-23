import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectEntity } from "./project.entity";

@Entity({name:'items'})
export class ItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({unique: false, nullable: false})
  nomenclature: string;

  @Column({unique: false, nullable: false})
  target: string;

  @Column({unique: false, nullable: false})
  amount: string;

  @Column({unique: false, nullable: false})
  measuringType: string;

  @Column({unique: false, nullable: false})
  price: number;

  @Column({unique: false, nullable: false})
  totalPrice: number;

  @Column({unique: false, nullable: false})
  receiver: string;

  @ManyToOne(() => ProjectEntity,
      project => project.items)
  project: ProjectEntity;
}