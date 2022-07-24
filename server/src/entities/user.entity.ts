import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommentEntity, RoleEntity } from "./index";
import { JoinColumn } from "typeorm";

@Entity({name: 'users'})
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  // one user to one role
  @OneToOne(() => RoleEntity)
  @JoinColumn()
  role: RoleEntity;

  // one user to many comments
  @OneToMany(() => CommentEntity,
      comment => comment.user)
  comments: CommentEntity[];

  @Column({unique: false, nullable: false})
  firstName: string;

  @Column({unique: false, nullable: false})
  lastName: string;

  @Column({unique: false, nullable: false})
  email: string;

  @Column({unique: false, nullable: false})
  password: string

  addComment(comment: CommentEntity) {
    if(this.comments == null) {
      this.comments = new Array<CommentEntity>();
      //console.log('null ev');
    }
    this.comments.push(comment);
    //console.log(this.events);
  }

  addComments(comment: CommentEntity[]) {
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