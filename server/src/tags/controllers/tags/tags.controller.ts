import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post, Query,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { TagsService } from "../../services/tags/tags.service";
import { CreateTagDto } from "../../dto/CreateTag.dto";

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsServices: TagsService) {
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  async getTags(@Query() pageOptionsDto) {
    return await this.tagsServices.getTags(pageOptionsDto);
  }

  @Get('/id/:id')
  @HttpCode(HttpStatus.OK)
  async getTagById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.tagsServices.getTagById(id);
  }

  @Get('/search/:title')
  @HttpCode(HttpStatus.OK)
  async searchTag(
    @Param('title') title: string,
  ) {
    return await this.tagsServices.searchTag(title);
  }

  @Post('createTag')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  async createTag(
    @Body() createTagDto: CreateTagDto,
  ) {
    return await this.tagsServices.createTag(createTagDto);
  }

  @Post('assignTag/tag/:tagId/task/:taskId')
  @HttpCode(HttpStatus.OK)
  async assignTagById(
    @Param('tagId', ParseIntPipe) tagId: number,
    @Param('taskId', ParseIntPipe) taskId: number,
  ) {
    return await this.tagsServices.assignTagById(tagId, taskId);
  }


}
