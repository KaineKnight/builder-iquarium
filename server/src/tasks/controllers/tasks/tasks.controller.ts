import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { TasksService } from "../../services/tasks/tasks.service";
import { PageOptionsDto } from "../../../utils/pagination/dto/pageOptions.dto";
import { CreateTaskDto } from "../../dto/CreateTask.dto";
import * as Http from "http";
import { UpdateTaskDto } from "../../dto/UpdateTask.dto";

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {
  }

  @Get('epochID/:id')
  @HttpCode(HttpStatus.OK)
  async getTasksByEpoch(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.tasksService.getTasksByEpoch(id);
  }

  @Get('/epochID/pagination/:id')
  @HttpCode(HttpStatus.OK)
  async getTasksByEpochId(
    @Query() pageOptionsDto: PageOptionsDto,
    @Param('epochId', ParseIntPipe) id: number,
  ) {
    return await this.tasksService.getTasksByEpochId(pageOptionsDto, id);
  }

  @Get('id/:id')
  @HttpCode(HttpStatus.OK)
  async getTaskById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.tasksService.getTaskById(id);
  }

  @Get('/search/:title')
  @HttpCode(HttpStatus.OK)
  async search(
    @Param('title') title: string,
  ) {
    return await this.tasksService.search(title);
  }

  @Post('createTaskByEpochId/:id')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  async createTaskByEpochId(
    @Param('id', ParseIntPipe) id: number,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return await this.tasksService.createTaskByEpochId(id, createTaskDto);
  }

  @Post('taskId/:taskId/epochId/:epochId/update')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  async updateTask(
    @Body() updateTaskDto: UpdateTaskDto,
    @Param('id', ParseIntPipe) taskId: number,
    @Param('epochId', ParseIntPipe) epochId: number,
  ) {
    return await this.tasksService.updateTask(epochId, taskId, updateTaskDto);
  }

}
