import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EpochEntity, ProjectEntity, TaskEntity } from "../../../entities";
import { Repository } from "typeorm";
import { PageOptionsDto } from "../../../utils/pagination/dto/pageOptions.dto";
import { PageMetaDto } from "../../../utils/pagination/dto/page-meta.dto";
import { PageDto } from "../../../utils/pagination/dto/page.dto";
import { CreateEpochDto } from "../../dto/CreateEpoch.dto";
import { classToPlain } from "class-transformer";

@Injectable()
export class EpochsService {
  constructor(
    @InjectRepository(ProjectEntity) private readonly projectsRepository: Repository<ProjectEntity>,
    @InjectRepository(EpochEntity) private readonly epochsRepository: Repository<EpochEntity>,
    @InjectRepository(TaskEntity) private readonly tasksRepository: Repository<TaskEntity>,
  ) {
  }

  async getEpochsByProject(id: number) {
    return await this.projectsRepository
      .createQueryBuilder('project')
      .leftJoinAndSelect("project.epochs", "epochs")
      .where("project.id = :id", {id: id})
      .getMany();
  }

  async getEpochsByProjectId(pageOptionsDto: PageOptionsDto, id: number) {
    const queryBuilder = this.epochsRepository.createQueryBuilder("epochs");
    queryBuilder
      .where("epochs.projectId = :id", {id: id})
      .orderBy("epochs.id", pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);
    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();
    const pageMetaDto = new PageMetaDto(({itemCount, pageOptionsDto}))
    return new PageDto(entities, pageMetaDto)
  }

  async getEpochById(id: number) {
    return await this.epochsRepository
      .createQueryBuilder('epoch')
      .leftJoinAndSelect("epoch.tasks", "tasks")
      .where("epoch.id = :id", {id: id})
      .getMany();
  }

  async createEpochByProjectId(id: number, createEpochDto: CreateEpochDto) {
    const project = await this.projectsRepository.findOneById(id);
    if(project == null) throw new HttpException("no such project", HttpStatus.BAD_REQUEST);
    //console.log(project);
    //return await this.projectsRepository
    //  .createQueryBuilder('project')
    //  .leftJoinAndSelect("project.epochs", "epochs")
    //  .where("project.id = :id", {id: id})
    //  .getSql();
    const epochs: EpochEntity[] = await this.epochsRepository.manager.query('' +
      'SELECT "epochs"."id" AS "id", "epochs"."title" AS "title", \n' +
      '"epochs"."startPlanDate" AS "startPlanDate", \n' +
      '"epochs"."endPlanDate" AS "endPlanDate", \n' +
      '"epochs"."projectId" AS "projectId" FROM\n' +
      '"projects" "project" LEFT JOIN "epochs" "epochs" ON "epochs"."projectId"="project"."id" WHERE "project"."id" = ' + `${id}`)

    if (epochs[0].id != null) {
      project.addEpochs(epochs);
    }
    project.addEpoch(await this.epochsRepository.save(createEpochDto))
    return await this.projectsRepository.save(project);
  }

  async updateEpoch(projectId: number, epochId: number, updateEpochDto) {
    const project = await this.projectsRepository.findOneById(projectId);
    if(project == null) throw new HttpException("no such project", HttpStatus.BAD_REQUEST);
    const epoch: EpochEntity = await this.epochsRepository.findOneById(epochId);
    if(epoch == null) throw new HttpException("no such epoch", HttpStatus.BAD_REQUEST);
    const epochs: EpochEntity[] = await this.epochsRepository.manager.query('' +
      'SELECT "epochs"."id" AS "id", "epochs"."title" AS "title", \n' +
      '"epochs"."startPlanDate" AS "startPlanDate", \n' +
      '"epochs"."endPlanDate" AS "endPlanDate", \n' +
      '"epochs"."projectId" AS "projectId" FROM\n' +
      '"projects" "project" LEFT JOIN "epochs" "epochs" ON "epochs"."projectId"="project"."id" WHERE "project"."id" = ' + `${projectId}`)
    if (epochs[0].id != null) {
      project.addEpochs(epochs);
    }
    project.addEpoch(epoch);
    return await this.projectsRepository.save(project);
  }
}
