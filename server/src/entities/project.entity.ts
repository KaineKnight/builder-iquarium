import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EpochEntity } from "./epoch.entity";


@Entity({name: 'projects'})
export class ProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  //one Project to many epochs
  @OneToMany(
    () => EpochEntity,
      epoch => epoch.project
  )
  epochs: EpochEntity[];

  @Column({unique: false, nullable: false})
  title: string;

  @Column({unique: false, nullable: false})
  moneyAmount: number;

  @Column({unique: false, nullable: false, default: () => "CURRENT_TIMESTAMP" })
  startPlanDate: Date;

  @Column({unique: false, nullable: false})
  endPlanDate: Date;

  addEpoch(epoch: EpochEntity) {
    if(this.epochs == null) {
      this.epochs = new Array<EpochEntity>();
      //console.log('null ev');
    }
    this.epochs.push(epoch);
    //console.log(this.events);
  }

  addEpochs(epoch: EpochEntity[]) {
    if(this.epochs == null) {
      this.epochs = new Array<EpochEntity>();
      //console.log('null ev');
    }
    for(let i = 0; i < epoch.length; i++) {
      this.epochs.push(epoch[i]);
    }
    //console.log(this.events);
  }
}