import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comments/comments.controller';
import { CommentsService } from './services/comments/comments.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentEntity, TaskEntity, UserEntity } from "../entities";

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, TaskEntity, UserEntity])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
