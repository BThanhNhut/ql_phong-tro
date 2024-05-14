import { IsNotEmpty, IsNumber } from 'class-validator';

export class Createamenitiesdetails {
  @IsNotEmpty()
  @IsNumber()
  id_room: number;

  @IsNotEmpty()
  @IsNumber()
  id_amenities: number;
}
