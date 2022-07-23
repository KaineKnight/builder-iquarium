import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateTagDto {
  @IsOptional()
  title: string;

  @IsNotEmpty()
  color: string;

}