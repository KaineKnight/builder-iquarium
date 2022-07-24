import { Module } from '@nestjs/common';
import { ItemsService } from './services/items/items.service';
import { ItemsController } from './controllers/items/items.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { EpochEntity, ItemEntity, ProjectEntity } from "../entities";

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity, ProjectEntity, EpochEntity])],
  providers: [ItemsService],
  controllers: [ItemsController]
})
export class ItemsModule {}
