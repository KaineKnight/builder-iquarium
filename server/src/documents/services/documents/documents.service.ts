import { HttpException, HttpStatus, Injectable, Post, Res, UploadedFile } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DocumentEntity, TaskEntity } from "../../../entities";
import { Repository } from "typeorm";
import {diskStorage} from "multer";
import * as path from "path";
import { uuid } from 'uuidv4';
import {Express, Request} from "express";
import { DocumentsDto } from "../../dto/documents.dto";
import { join } from "path";
import { of } from "rxjs";


@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(DocumentEntity) private readonly documentsRepository: Repository<DocumentEntity>,
    @InjectRepository(TaskEntity) private readonly taskRepository: Repository<TaskEntity>,
  ) {
  }

  async getAllDocuments() {

    return await this.documentsRepository
      .createQueryBuilder('docs')
      .getMany();
  }

  async uploadFile(file: Express.Multer.File, id: number) {
    //if(file == null) throw new HttpException("no file", HttpStatus.BAD_REQUEST)
    const createDocumentDto: DocumentsDto = {
      "title": file.filename,
      "file": file.path,
      "taskId": id,
    }
    return await this.documentsRepository.save(createDocumentDto);
  }

  async getDocumentById(id: number, @Res() res) {
    const entity: DocumentEntity = await this.documentsRepository.findOneById(id);
    console.log(entity);
    if (!entity) return res.send(HttpStatus.NOT_FOUND);
    if (entity.file) return of(res.sendFile(join(process.cwd(), entity.file)));
    else res.send(HttpStatus.NOT_FOUND)
  }
}
