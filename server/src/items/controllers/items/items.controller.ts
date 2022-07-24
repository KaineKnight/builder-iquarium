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
import { ItemsService } from "../../services/items/items.service";
import { PageOptionsDto } from "../../../utils/pagination/dto/pageOptions.dto";
import { CreateTaskDto } from "../../../tasks/dto/CreateTask.dto";
import { CreateItemDto } from "../../dto/CreateItem.dto";

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  async getAllItems() {
    return await this.itemsService.getAllItems();
  }


  @Get('epochID/:id')
  @HttpCode(HttpStatus.OK)
  async getItemsByProject(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.itemsService.getItemsByProject(id);
  }

  @Get('/epochID/pagination/:id')
  @HttpCode(HttpStatus.OK)
  async getItemsByProjectId(
    @Query() pageOptionsDto: PageOptionsDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.itemsService.getItemsByProjectId(pageOptionsDto, id);
  }

  @Get('id/:id')
  @HttpCode(HttpStatus.OK)
  async getItemById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.itemsService.getItemById(id);
  }

  @Post('createItemByProjectId/:id')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  async createTaskByEpochId(
    @Param('id', ParseIntPipe) id : number,
    @Body() createItemDto: CreateItemDto,
  ) {
    return await this.itemsService.createItemByProjectId(id, createItemDto);
  }


}
