import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TaskEntity } from "./task.entity";
import { CommentEntity } from "./comment.entity";

@Entity({name: 'tags'})
export class TagEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({unique: false, nullable: true})
  title: string;

  @Column({unique: false, nullable: false})
  color: string;

  //one tag to many tasks
  @OneToMany(() => TaskEntity, task => task.tag)
  tasks: TaskEntity[];

  addTask(task: TaskEntity) {
    if(this.tasks == null) {
      this.tasks = new Array<TaskEntity>();
      //console.log('null ev');
    }
    this.tasks.push(task);
    //console.log(this.events);
  }

  addTasks(task: TaskEntity[]) {
    if (this.tasks == null) {
      this.tasks = new Array<TaskEntity>();
      //console.log('null ev');
    }
    for (let i = 0; i < task.length; i++) {
      this.tasks.push(task[i]);

    }
  }


  }