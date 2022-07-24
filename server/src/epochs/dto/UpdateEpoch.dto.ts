import { IsOptional } from "class-validator";

export class UpdateEpochDto {
  @IsOptional()
  title: string;

  @IsOptional()
  startPlanDate: Date;

  @IsOptional()
  endPlanDate: Date;

  @IsOptional()
  projectId: number;

}