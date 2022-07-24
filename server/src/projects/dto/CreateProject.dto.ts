import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateProjectDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  moneyAmount: number;

  @IsOptional()
  startPlanDate: Date;

  @IsNotEmpty()
  endPlanDate: Date;

}