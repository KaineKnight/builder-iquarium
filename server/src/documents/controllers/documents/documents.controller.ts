import {
  Body,
  Controller,
  Get, HttpCode, HttpStatus,
  NotFoundException,
  Param, ParseBoolPipe,
  ParseIntPipe,
  Post, Res,
  UploadedFile,
  UseInterceptors, UsePipes, ValidationPipe
} from "@nestjs/common";
import {FileInterceptor} from "@nestjs/platform-express";
import {Express, Request} from "express";
import {diskStorage} from "multer";
import * as path from "path";
import { uuid } from 'uuidv4';
import {of} from "rxjs";
import {join} from "path";
import { DocumentsService } from "../../services/documents/documents.service";



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
  getDocumentById(@Param('id', ParseIntPipe) id: number,
                  @Res() res) {
    return this.documentsService.getDocumentById(id, res);
  }

  @Post('taskID/:id/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/',
      filename: (req: Request, file,  cb) => {
        const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuid();
        const extension: string =  path.parse(file.originalname).ext;

        cb(null, `${filename}${extension}`)
      }
    })
  }))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('id', ParseIntPipe) id: number,) {
    return await this.documentsService.uploadFile(file, id);
  }


}
