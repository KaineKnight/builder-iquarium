import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RoleEntity } from "./index";
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

  @Column({unique: false, nullable: false})
  firstName: string;

  @Column({unique: false, nullable: false})
  lastName: string;

  @Column({unique: false, nullable: false})
  email: string;

  @Column({unique: false, nullable: false})
  password: string;

}