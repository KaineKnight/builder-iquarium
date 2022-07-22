import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TaskEntity } from "./task.entity";

@Entity({name: 'tags'})
export class TagEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({unique: false, nullable: false})
  title: string;

  @Column({unique: false, nullable: true})
  color: string;

  //many tags to many tasks
  @ManyToMany(() => TaskEntity)
  @JoinTable()
  tasks: TaskEntity[];

}