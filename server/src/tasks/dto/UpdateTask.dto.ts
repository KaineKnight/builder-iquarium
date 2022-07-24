import { IsNotEmpty, IsOptional } from "class-validator";
import { EpochEntity, TeamEntity } from "../../entities";

export class UpdateTaskDto {
  @IsOptional()
  title: string;

  @IsOptional()
  startPlanDate: Date;

  @IsOptional()
  duration: number;

  @IsOptional()
  status: number;

  @IsOptional()
  epochId: number;

  @IsOptional()
  teamId: number

  @IsOptional()
  isFinished: boolean;

}