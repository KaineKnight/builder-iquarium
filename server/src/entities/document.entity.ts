import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TaskEntity } from "./task.entity";

@Entity({name: 'documents'})
export class DocumentEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  //many documents to many tasks
  @ManyToMany(() => TaskEntity)
  @JoinTable()
  tasks: TaskEntity[];

  @Column({unique: false, nullable: true})
  title: string;

  @Column({unique: false, nullable: false})
  imgPath: string;

  @CreateDateColumn()
  createdAt: Date;

}