import { IsNotEmpty, IsOptional } from "class-validator";

export class DocumentsDto {
  @IsOptional()
  title: string;

  @IsNotEmpty()
  imgPath: string;

  @IsOptional()
  taskId: number;

}