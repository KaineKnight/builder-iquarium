import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { TaskEntity } from "./task.entity";

@Entity({name: 'documents'})
export class DocumentEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  //many documents to one task
  @ManyToOne(() => TaskEntity,
    task => task.documents)
  task: TaskEntity;

  @Column({unique: false, nullable: true})
  title: string;

  @Column({unique: false, nullable: true})
  sender: string;

  @Column({unique: false, nullable: true})
  file: string;

  @Column({unique: false, nullable: true})
  status: string;

  @CreateDateColumn()
  createdAt: Date;

}