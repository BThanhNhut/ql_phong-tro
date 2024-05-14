import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFurnituredetails {
  @IsNotEmpty()
  @IsNumber()
  id_room: number;

  @IsNotEmpty()
  @IsNumber()
  id_furniture: number;
}

export class ListNumber {
  @IsArray()
  @IsNumber({}, { each: true })
  numbers: number[];
  @IsNotEmpty()
  @IsNumber()
  id_room: number;
}
