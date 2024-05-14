import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateImage {
  @IsNotEmpty()
  @IsNumber()
  id_rooms: number;
  @IsNotEmpty()
  url: string;
}

class ImageSelect2 {
  @IsString()
  url: string;

  @IsString()
  imageName: string;
}

export class ListImage {
  @IsNumber()
  id_rooms: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageSelect2)
  urls: ImageSelect2[];
}
