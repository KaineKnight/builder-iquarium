import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateEpochDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  startPlanDate: Date;

  @IsNotEmpty()
  endPlanDate: Date;

}