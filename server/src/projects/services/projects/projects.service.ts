import { Injectable } from '@nestjs/common';
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

  async getProjectById(id) {
    return await this.projectsRepository
      .createQueryBuilder('project')
      .leftJoinAndSelect("project.epochs", "epochs")
      .where("project.id = :id", {id: id})
      .getMany();
  }

  async createProject(createProjectDto) {
    return await this.projectsRepository.save(createProjectDto);
  }

  async updateProject(id, updateProjectDto) {
    return await this.projectsRepository.update({ id: id, }, updateProjectDto)
  }

}
