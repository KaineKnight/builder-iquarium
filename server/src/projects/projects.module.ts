import { Module } from '@nestjs/common';
import { ProjectsController } from './controllers/projects/projects.controller';
import { ProjectsService } from './services/projects/projects.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { EpochEntity, ProjectEntity } from "../entities";

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity, EpochEntity])],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
