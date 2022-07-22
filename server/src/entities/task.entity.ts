import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EpochEntity } from "./epoch.entity";
import { TeamEntity } from "./team.entity";
import { CommentEntity } from "./comment.entity";

@Entity({name: 'tasks'})
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  //many tasks to one epoch
  @ManyToOne(
    () => EpochEntity, epoch => epoch.tasks
  )
  epoch: EpochEntity;

  //many teams to one team
  @ManyToOne(
    () => TeamEntity, team => team.tasks
  )
  team: TeamEntity;

  //many tasks to many documents

  @Column({unique: false, nullable: false})
  title: string;

  @Column({unique: false, nullable: false, default: () => "CURRENT_TIMESTAMP" })
  startPlanDate: Date;

  @Column({unique: false, nullable: false})
  duration: number;

  @Column({unique: false, nullable: false})
  status: number; // 0-task, 1-inProgress, 2-readyForQA, 3-finished

  //one task to many comments
  @OneToMany(
    () => CommentEntity, comment => comment.task
  )
  comments: CommentEntity[];
}