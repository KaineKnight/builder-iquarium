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
import { ProjectsService } from "../../services/projects/projects.service";
import { CreateProjectDto } from "../../dto/CreateProject.dto";
import { UpdateProjectDto } from "../../dto/UpdateProject.dto";
import { PageOptionsDto } from "../../../utils/pagination/dto/pageOptions.dto";

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  async getProjects(@Query() pageOptionsDto: PageOptionsDto) {
    return await this.projectsService.getProjects(pageOptionsDto);
  }

  @Get('projects')
  @HttpCode(HttpStatus.OK)
  async getProjectsProjects(@Query() pageOptionsDto: PageOptionsDto) {
    return await this.projectsService.getProjectsProjects(pageOptionsDto);
  }


  @Get('id/:id')
  @HttpCode(HttpStatus.OK)
  async getProjectById(@Param('id', ParseIntPipe) id: number) {
    return await this.projectsService.getProjectById(id);
  }

  @Get('/search/:title')
  @HttpCode(HttpStatus.OK)
  async search(
    @Param('title') title: string,
  ) {
    return await this.projectsService.search(title);
  }

  @Post('createProject')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  async createProject(@Body() createProjectDto: CreateProjectDto) {
    return await this.projectsService.createProject(createProjectDto);
  }

  @Post('id/:id/update')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  async updateProject(
    @Body() updateProjectDto: UpdateProjectDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.projectsService.updateProject(id, updateProjectDto);
  }


}
