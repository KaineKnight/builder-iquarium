import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProjectEntity } from "./project.entity";
import { TaskEntity } from "./task.entity";

@Entity({name: 'epochs'})
export class EpochEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  //many epochs to one project
  @ManyToOne(
    () => ProjectEntity,
      project => project.epochs
  )
  project: ProjectEntity;

  //one epoch to many tasks
  @OneToMany(
    () => TaskEntity,
    task => task.epoch
  )
  tasks: TaskEntity[];

  @Column({unique: false, nullable: false})
  title: string;

  @Column({unique: false, nullable: false, default: () => "CURRENT_TIMESTAMP" })
  startPlanDate: Date;

  @Column({unique: false, nullable: false})
  endPlanDate: Date;

}