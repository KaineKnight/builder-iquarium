import { Module } from '@nestjs/common';
import { TasksController } from './controllers/tasks/tasks.controller';
import { TasksService } from './services/tasks/tasks.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntity } from "../entities";

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
