import { Module } from '@nestjs/common';
import { EpochsController } from './controllers/epochs/epochs.controller';
import { EpochsService } from './services/epochs/epochs.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { EpochEntity, ProjectEntity, TaskEntity } from "../entities";

@Module({
  imports: [TypeOrmModule.forFeature([EpochEntity, TaskEntity, ProjectEntity])] ,
  controllers: [EpochsController],
  providers: [EpochsService]
})
export class EpochsModule {}
