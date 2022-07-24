import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectEntity } from "./project.entity";
import { EpochEntity } from "./epoch.entity";

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

  @Column({unique: false, nullable: false, type: 'double precision'})
  price: number;

  @Column({unique: false, nullable: false, type: 'double precision'})
  totalPrice: number;

  @Column({unique: false, nullable: false})
  receiver: string;

  @ManyToOne(() => EpochEntity,
      epoch => epoch.items)
  epoch: EpochEntity;
}