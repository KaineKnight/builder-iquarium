import { IsNotEmpty, IsOptional } from "class-validator";
import { EpochEntity, TeamEntity } from "../../entities";

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  startPlanDate: Date;

  @IsNotEmpty()
  endPlanDate: Date;

  @IsOptional()
  duration: number;

  @IsOptional()
  status: number;

}