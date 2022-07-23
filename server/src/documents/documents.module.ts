import { Module } from '@nestjs/common';
import { DocumentsController } from './controllers/documents/documents.controller';
import { DocumentsService } from './services/documents/documents.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DocumentEntity, TaskEntity } from "../entities";

@Module({
  imports: [TypeOrmModule.forFeature([DocumentEntity, TaskEntity])],
  controllers: [DocumentsController],
  providers: [DocumentsService]
})
export class DocumentsModule {}
