import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EpochEntity, ProjectEntity } from "../../../entities";
import { Repository } from "typeorm";
import { PageOptionsDto } from "../../../utils/pagination/dto/pageOptions.dto";
import { PageMetaDto } from "../../../utils/pagination/dto/page-meta.dto";
import { PageDto } from "../../../utils/pagination/dto/page.dto";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity) private readonly projectsRepository: Repository<ProjectEntity>,
    @InjectRepository(EpochEntity) private readonly epochsRepository: Repository<EpochEntity>,
  ) {
  }

  async getProjects(pageOptionsDto: PageOptionsDto) {
    const queryBuilder = this.projectsRepository.createQueryBuilder("projects");
    queryBuilder
      .orderBy("projects.id", pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);
    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();
    const pageMetaDto = new PageMetaDto(({itemCount, pageOptionsDto}))
    return new PageDto(entities, pageMetaDto)
  }

  async getProjectsProjects(pageOptionsDto: PageOptionsDto) {
    return await this.projectsRepository
      .createQueryBuilder('project')
      .leftJoinAndSelect("project.epochs", "epochs")
      .getMany();
  }

  async getProjectById(id) {
    return await this.projectsRepository
      .createQueryBuilder('project')
      .leftJoinAndSelect("project.epochs", "epochs")
      .where("project.id = :id", {id: id})
      .getMany();
  }

  async createProject(createProjectDto) {
    console.log('createProj');
    return await this.projectsRepository.save(createProjectDto);
  }

  async updateProject(id, updateProjectDto) {
    const project: ProjectEntity = await this.projectsRepository.findOneById(id); // update({ id: id, }, updateProjectDto
    if (project == null) throw new HttpException('project not found', HttpStatus.NOT_FOUND);
    return await this.projectsRepository.update({ id: id, }, updateProjectDto);
  }

}
