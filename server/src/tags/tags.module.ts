import { Module } from '@nestjs/common';
import { TagsController } from './controllers/tags/tags.controller';
import { TagsService } from './services/tags/tags.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagEntity, TaskEntity } from "../entities";

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, TagEntity])],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule {}
