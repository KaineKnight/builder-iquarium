import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateCommentDto {
  @IsNotEmpty()
  text: string;

  @IsOptional()
  isSolved: boolean;
}