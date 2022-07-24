import { IsOptional } from "class-validator";

export class UpdateProjectDto {
  @IsOptional()
  title: string;

  @IsOptional()
  moneyAmount: number;

  @IsOptional()
  startPlanDate: Date;

  @IsOptional()
  endPlanDate: Date;

}