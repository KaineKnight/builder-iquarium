import { IsNotEmpty, IsOptional } from "class-validator";

export class DocumentsDto {
  @IsOptional()
  title: string;

  @IsNotEmpty()
  file: string;

  @IsOptional()
  taskId: number;

}