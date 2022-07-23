import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { CommentsService } from "../../services/comments/comments.service";
import { CreateCommentDto } from "../../dto/CreateComment.dto";

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {
  }

  @Get('userID/:id')
  @HttpCode(HttpStatus.OK)
  async getCommentsByUserId(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.commentsService.getCommentsByUserId(id);
  }

  @Get('taskID/:id')
  @HttpCode(HttpStatus.OK)
  async getCommentsByTaskId(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.commentsService.getCommentsByTaskId(id);
  }

  @Post('user/:userId/task/:taskId/createComment')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  async createComment(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('taskId', ParseIntPipe) taskId: number,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return await this.commentsService.createComment(userId, taskId, createCommentDto);
  }

}
