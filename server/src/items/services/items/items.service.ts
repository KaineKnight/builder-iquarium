import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EpochEntity, ItemEntity, ProjectEntity } from "../../../entities";
import { Repository } from "typeorm";
import { PageOptionsDto } from "../../../utils/pagination/dto/pageOptions.dto";
import { PageMetaDto } from "../../../utils/pagination/dto/page-meta.dto";
import { PageDto } from "../../../utils/pagination/dto/page.dto";
import { CreateItemDto } from "../../dto/CreateItem.dto";

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ProjectEntity) private readonly projectRepository: Repository<ProjectEntity>,
    @InjectRepository(ItemEntity) private readonly itemRepository: Repository<ItemEntity>,
  ) {
  }

  async getItemsByProject(id: number) {
    return await this.projectRepository
      .createQueryBuilder('project')
      .leftJoinAndSelect("project.items", "items")
      .where("project.id = :id", {id: id})
      .getMany();
  }

  async getItemsByProjectId(pageOptionsDto: PageOptionsDto, id: number) {
    const queryBuilder = this.itemRepository.createQueryBuilder("items");
    queryBuilder
      .where("items.projectId = :id", {id: id})
      .orderBy("items.id", pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);
    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();
    const pageMetaDto = new PageMetaDto(({itemCount, pageOptionsDto}))
    return new PageDto(entities, pageMetaDto)
  }

  async getItemById(id: number) {
    return await this.itemRepository
      .createQueryBuilder('item')
      .where("item.id = :id", {id: id})
      .getOne();
  }

  async createItemByProjectId(id: number, createItemDto: CreateItemDto) {
    const project = await this.projectRepository.findOneById(id);
    if(project == null) throw new HttpException("no such project", HttpStatus.BAD_REQUEST);
    console.log(project);
    //return await this.projectRepository
    //  .createQueryBuilder('project')
    //  .leftJoinAndSelect("project.items", "items")
    //  .where("project.id = :id", {id: id})
    //  .getSql();
    const items: ItemEntity[] = await this.itemRepository.manager.query('' +
      'SELECT "items"."id" AS "id", "items"."nomenclature" AS "nomenclature", \n' +
      '"items"."target" AS "target", "items"."amount" AS "amount", \n' +
      '"items"."measuringType" AS "measuringType", "items"."price" AS "price", \n' +
      '"items"."totalPrice" AS "totalPrice", "items"."receiver" AS "receiver", \n' +
      '"items"."projectId" AS "projectId" FROM "projects" "project" LEFT JOIN "items" "items" ON "items"."projectId"="project"."id" WHERE\n' +
      '"project"."id" = ' + `${id}`)

    if (items[0].id != null) {
      project.addItems(items);
    }
    project.addItem(await this.itemRepository.save(createItemDto))
    return await this.projectRepository.save(project);
  }
}
