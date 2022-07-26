import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query, UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { EpochsService } from "../../services/epochs/epochs.service";
import { PageOptionsDto } from "../../../utils/pagination/dto/pageOptions.dto";
import { UpdateEpochDto } from "../../dto/UpdateEpoch.dto";
import { CreateEpochDto } from "../../dto/CreateEpoch.dto";

@Controller('epochs')
export class EpochsController {
  constructor(private readonly epochsService: EpochsService) {
  }

  @Get('projectID/:id/')
  @HttpCode(HttpStatus.OK)
  async getEpochsByProject(
    @Param('id', ParseIntPipe) id: number
  ) {
    return await this.epochsService.getEpochsByProject(id);
  }

  @Get('projectID/pagination/:id')
  @HttpCode(HttpStatus.OK)
  async getEpochsByProjectId(
    @Query() pageOptionsDto: PageOptionsDto,
    @Param('id', ParseIntPipe) id: number
  ) {
    return await this.epochsService.getEpochsByProjectId(pageOptionsDto, id);
  }

  @Get('id/:id')
  @HttpCode(HttpStatus.OK)
  async getEpochById(
    @Param('id', ParseIntPipe) id: number
  ) {
    return await this.epochsService.getEpochById(id);
  }

  @Get('/search/:title')
  @HttpCode(HttpStatus.OK)
  async search(
    @Param('title') title: string,
  ) {
    return await this.epochsService.search(title);
  }

  @Post('createEpochByProjectID/:id')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  async createEpochByProjectId(
    @Param('id', ParseIntPipe) id: number,
    @Body() createEpochDto: CreateEpochDto,
  ) {
    return await this.epochsService.createEpochByProjectId(id, createEpochDto);
  }

  @Post('epochId/:epochId/projectId/:projectId/update')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  async updateEpoch(
    @Body() updateEpochDto: UpdateEpochDto,
    @Param('epochId', ParseIntPipe) epochId: number,
    @Param('projectId', ParseIntPipe) projectId: number,
  ) {
    return await this.epochsService.updateEpoch(projectId, epochId, updateEpochDto);
  }
}
