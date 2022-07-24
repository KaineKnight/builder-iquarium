import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { TaskEntity } from "./task.entity";

@Entity({name: 'comments'})
export class CommentEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  //many comments to one task
  @ManyToOne(
    () => TaskEntity, task => task.comments
  )
  task: TaskEntity;

  @Column({unique: false, nullable: false})
  text: string;

  @Column({unique: false, nullable: false, default: false})
  isSolved: boolean;

  //one comment to one user
  @ManyToOne(() => UserEntity, user => user.comments)
  user: UserEntity;


}