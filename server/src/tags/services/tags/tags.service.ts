import { HttpException, HttpStatus, Injectable, Param, ParseIntPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CommentEntity, EpochEntity, TagEntity, TaskEntity } from "../../../entities";
import { Repository } from "typeorm";
import { PageOptionsDto } from "../../../utils/pagination/dto/pageOptions.dto";
import { PageMetaDto } from "../../../utils/pagination/dto/page-meta.dto";
import { PageDto } from "../../../utils/pagination/dto/page.dto";
import { CreateTagDto } from "../../dto/CreateTag.dto";

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(TagEntity) private readonly tagRepository: Repository<TagEntity>,
    @InjectRepository(TaskEntity) private readonly taskRepository: Repository<TaskEntity>,
  ) {
  }

  async getTags(pageOptionsDto: PageOptionsDto) {
    const queryBuilder = this.tagRepository.createQueryBuilder("tags");
    await queryBuilder
      .orderBy("tags.title", pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);
    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();
    const pageMetaDto = new PageMetaDto(({ itemCount, pageOptionsDto }));
    return new PageDto(entities, pageMetaDto);
  }

  async getTagById(id: number) {
    return await this.tagRepository.findOneById(id);
  }

  async searchTag(title: string) {
    return await this.tagRepository.manager.query('' +
      'SELECT *\n' +
      'FROM tags\n' +
      'WHERE title ~*' + ` \'${title}\'` );
  }

  async createTag(createTagDto: CreateTagDto) {
    return await this.tagRepository.save(createTagDto)
  }

  async assignTagById(tagId, taskId) {
    const tag = await this.tagRepository.findOneById(tagId);
    if(tag == null) throw new HttpException("no such tag", HttpStatus.BAD_REQUEST);
    //return await this.tagRepository
    //  .createQueryBuilder('tag')
    //  .leftJoinAndSelect("tag.tasks", "tasks")
    //  .where("tag.id = :id", {id: tagId})
    //  .getSql();
    const tasks: TaskEntity[] = await this.taskRepository.manager.query('SELECT "tasks"."id" AS "id","tasks"."title" AS "title", \n' +
      '"tasks"."startPlanDate" AS "startPlanDate", \n' +
      '"tasks"."endPlanDate" AS "endPlanDate", "tasks"."duration" AS "duration", \n' +
      '"tasks"."status" AS "status", \n' +
      '"tasks"."epochId" AS "epochId", "tasks"."teamId" AS "teamId", \n' +
      '"tasks"."tagId" AS "tagId" FROM "tags" "tag" LEFT JOIN\n' +
      '"tasks" "tasks" ON "tasks"."tagId"="tag"."id" WHERE "tag"."id" = ' + `${taskId}`);
    if (tasks[0].id != null) {
      tag.addTasks(tasks);
    }
    tag.addTask(await this.taskRepository.findOneById(taskId))
    return await this.tagRepository.save(tag);
  }
}