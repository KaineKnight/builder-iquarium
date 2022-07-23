import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EpochEntity } from "./epoch.entity";
import { ItemEntity } from "./item.entity";


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

  @OneToMany(() => ItemEntity, item => item.project)
  items: ItemEntity[];

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

  addItem(item: ItemEntity) {
    if(this.items == null) {
      this.items = new Array<ItemEntity>();
      //console.log('null ev');
    }
    this.items.push(item);
    //console.log(this.events);
  }

  addItems(item: ItemEntity[]) {
    if(this.items == null) {
      this.items = new Array<ItemEntity>();
      //console.log('null ev');
    }
    for(let i = 0; i < item.length; i++) {
      this.items.push(item[i]);
    }
    //console.log(this.events);
  }
}