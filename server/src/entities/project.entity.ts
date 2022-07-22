import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EpochEntity } from "./epoch.entity";


@Entity({name: 'projects'})
export class ProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  //one Project to many epochs
  @OneToMany(
    () => EpochEntity,
      epoch => epoch.project
  )
  epochs: EpochEntity[];

  @Column({unique: false, nullable: false})
  title: string;

  @Column({unique: false, nullable: false})
  moneyAmount: number;

  @Column({unique: false, nullable: false, default: () => "CURRENT_TIMESTAMP" })
  startPlanDate: Date;

  @Column({unique: false, nullable: false})
  endPlanDate: Date;
}