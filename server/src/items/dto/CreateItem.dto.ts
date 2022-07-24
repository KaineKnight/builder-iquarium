import { IsNotEmpty } from "class-validator";

export class CreateItemDto {
  @IsNotEmpty()
  nomenclature: string;

  @IsNotEmpty()
  target: string;

  @IsNotEmpty()
  amount: string;

  @IsNotEmpty()
  measuringType: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  totalPrice: number;

  @IsNotEmpty()
  receiver: string;

}