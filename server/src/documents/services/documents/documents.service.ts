import { Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DocumentEntity, TaskEntity } from "../../../entities";
import { Repository } from "typeorm";
import {diskStorage} from "multer";
import * as path from "path";
import { uuid } from 'uuidv4';
import {Express, Request} from "express";


@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(DocumentEntity) private readonly documentsRepository: Repository<DocumentEntity>,
    @InjectRepository(TaskEntity) private readonly taskRepository: Repository<TaskEntity>,
  ) {
  }

  async getAllDocuments() {

  }

  async getDocumentById(id: number) {

  }


  /*async uploadFile(file: File) {
    return //await this.documentsRepository.save(file.);
  }*/
}
