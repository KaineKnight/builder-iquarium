import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { TasksService } from "../../services/tasks/tasks.service";

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {
  }

  @Get('/projectId/:projectId')
  @HttpCode(HttpStatus.OK)
  async getTasksByProjectId(
    @Param('projectId', ParseIntPipe) projectId: number,
  ) {

  }
}
