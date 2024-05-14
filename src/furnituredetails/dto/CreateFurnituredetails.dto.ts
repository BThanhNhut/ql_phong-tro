import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFurnituredetails {
  @IsNotEmpty()
  @IsNumber()
  id_room: number;

  @IsNotEmpty()
  @IsNumber()
  id_furniture: number;
}
