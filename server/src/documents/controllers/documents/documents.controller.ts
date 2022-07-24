import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { DocumentsService } from "../../services/documents/documents.service";
import { FileInterceptor } from "@nestjs/platform-express";
import {diskStorage} from "multer";
import * as path from "path";
import { uuid } from 'uuidv4';
import {Express, Request} from "express";
import { join } from 'path';
import {of} from "rxjs";



@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {

  }

  @Get('documents')
  getAllDocuments() {
    return this.documentsService.getAllDocuments();
  }

  @Get('document/:id')
  @HttpCode(HttpStatus.OK)
  getDocumentById(@Param('id', ParseIntPipe) id: number) {
    return this.documentsService.getDocumentById(id);
  }

  /*@Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/requestImages',
      filename: (req: Request, file,  cb) => {
        const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuid();
        const extension: string =  path.parse(file.originalname).ext;

        cb(null, `${filename}${extension}`)
      }
    })
  }))*/
 /* async uploadFile(@UploadedFile() file: Express.Multer.File) {
    //return await this.documentsService.uploadFile(file);
  }
*/

}
