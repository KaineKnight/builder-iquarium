import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CommentEntity, EpochEntity, TaskEntity } from "../../../entities";
import { Repository } from "typeorm";
import { PageOptionsDto } from "../../../utils/pagination/dto/pageOptions.dto";
import { PageDto } from "../../../utils/pagination/dto/page.dto";
import { PageMetaDto } from "../../../utils/pagination/dto/page-meta.dto";
import { CreateTaskDto } from "../../dto/CreateTask.dto";
import { UpdateTaskDto } from "../../dto/UpdateTask.dto";
import { IsOptional } from "class-validator";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(EpochEntity) private readonly epochRepository: Repository<EpochEntity>,
    @InjectRepository(TaskEntity) private readonly taskRepository: Repository<TaskEntity>,
    @InjectRepository(CommentEntity) private readonly commentRepository: Repository<CommentEntity>,
    ) {
  }

  async getTasksByEpoch(id: number) {
    return await this.epochRepository
      .createQueryBuilder('epoch')
      .leftJoinAndSelect("epoch.tasks", "tasks")
      .where("epoch.id = :id", {id: id})
      .getMany();
  }

  async getTasksByEpochId(pageOptionsDto: PageOptionsDto, id: number) {
    const queryBuilder = this.taskRepository.createQueryBuilder("tasks");
    queryBuilder
      .where("tasks.epochId = :id", {id: id})
      .orderBy("epochs.id", pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);
    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();
    const pageMetaDto = new PageMetaDto(({itemCount, pageOptionsDto}))
    return new PageDto(entities, pageMetaDto)
  }

  async getTaskById(id: number) {
    return await this.taskRepository
      .createQueryBuilder('task')
      .leftJoinAndSelect("task.comments", "comments")
      .where("task.id = :id", {id: id})
      .getMany();
  }

  async createTaskByEpochId(id: number, createTaskDto: CreateTaskDto) {
    const epoch = await this.epochRepository.findOneById(id);
    if(epoch == null) throw new HttpException("no such epoch", HttpStatus.BAD_REQUEST);
    //return await this.epochRepository
    //  .createQueryBuilder('epoch')
    //  .leftJoinAndSelect("epoch.tasks", "tasks")
    //  .where("epoch.id = :id", {id: id})
    //  .getSql();
    const tasks: TaskEntity[] = await this.taskRepository.manager.query('' +
      'SELECT "tasks"."id" AS "id","tasks"."title" AS "title", \n' +
      '"tasks"."startPlanDate" AS "startPlanDate", \n' +
      '"tasks"."endPlanDate" AS "endPlanDate", "tasks"."duration" AS "duration", \n' +
      '"tasks"."status" AS "status", "tasks"."epochId" AS "epochId", \n' +
      '"tasks"."teamId" AS "teamId" \n' +
      'FROM "epochs" "epoch" LEFT JOIN "tasks" "tasks" ON\n' +
      '"tasks"."epochId"="epoch"."id" WHERE "epoch"."id" = ' + `${id}`)

    if (tasks[0].id != null) {
      epoch.addTasks(tasks);
    }
    epoch.addTask(await this.taskRepository.save(createTaskDto))
    return await this.epochRepository.save(epoch);
  }

  async updateTask(epochId: number, taskId: number, updateTaskDto: UpdateTaskDto) {
    const epoch: EpochEntity = await this.epochRepository.findOneById(epochId);
    if(epoch == null) throw new HttpException("no such epoch", HttpStatus.BAD_REQUEST);
    const task: TaskEntity = await this.taskRepository.findOneById(taskId);
    if(task == null) throw new HttpException("no such epoch", HttpStatus.BAD_REQUEST);
    const tasks: TaskEntity[] = await this.taskRepository.manager.query('' +
      'SELECT "tasks"."id" AS "id","tasks"."title" AS "title", \n' +
      '"tasks"."startPlanDate" AS "startPlanDate", \n' +
      '"tasks"."endPlanDate" AS "endPlanDate", "tasks"."duration" AS "duration", \n' +
      '"tasks"."status" AS "status", "tasks"."epochId" AS "epochId", \n' +
      '"tasks"."teamId" AS "teamId" \n' +
      'FROM "epochs" "epoch" LEFT JOIN "tasks" "tasks" ON\n' +
      '"tasks"."epochId"="epoch"."id" WHERE "epoch"."id" = ' + `${epochId}`)
    if (tasks[0].id != null) {
      epoch.addTasks(tasks);
    }
    epoch.addTask(task);
    await this.epochRepository.save(epoch);
    return await this.taskRepository.update({id: taskId},
      {
        title: updateTaskDto.title,
        startPlanDate: updateTaskDto.startPlanDate,
        duration: updateTaskDto.duration,
        status: updateTaskDto.status
      })
  }
}
