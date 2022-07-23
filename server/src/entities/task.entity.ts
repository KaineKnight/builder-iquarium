import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EpochEntity } from "./epoch.entity";
import { TeamEntity } from "./team.entity";
import { CommentEntity } from "./comment.entity";
import { DocumentEntity } from "./document.entity";

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

  //many tasks to one team
  @ManyToOne(
    () => TeamEntity, team => team.tasks
  )
  team: TeamEntity;

  //one task to many documents
  @OneToMany(
    () => DocumentEntity,
    document => document.task
  )
  documents: DocumentEntity[];

  @Column({unique: false, nullable: false})
  title: string;

  @Column({unique: false, nullable: false, default: () => "CURRENT_TIMESTAMP" })
  startPlanDate: Date;

  @Column({unique: false, nullable: false})
  endPlanDate: Date;

  @Column({unique: false, nullable: false, default: 0})
  duration: number;

  @Column({unique: false, nullable: false, default: 0})
  status: number; // 0-task, 1-inProgress, 2-readyForQA, 3-finished

  //one task to many comments
  @OneToMany(
    () => CommentEntity, comment => comment.task
  )
  comments: CommentEntity[];

  addComments(comment: CommentEntity) {
    if(this.comments == null) {
      this.comments = new Array<CommentEntity>();
      //console.log('null ev');
    }
    this.comments.push(comment);
    //console.log(this.events);
  }

  addTasks(comment: CommentEntity[]) {
    if(this.comments == null) {
      this.comments = new Array<CommentEntity>();
      //console.log('null ev');
    }
    for(let i = 0; i < comment.length; i++) {
      this.comments.push(comment[i]);
    }
    //console.log(this.events);
  }


}