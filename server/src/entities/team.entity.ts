import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TaskEntity } from "./task.entity";

@Entity({name: 'teams'})
export class TeamEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  // one team to many tasks
  @OneToMany(
    () => TaskEntity,
    task => task.team
  )
  tasks: TaskEntity[];

  @Column({unique: false, nullable: false})
  title: string;

  @Column({unique: false, nullable: false})
  workersNumber: number;

}