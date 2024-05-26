import { IsBoolean, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  service_name: string;

  cost: string;

  @IsString()
  note?: string;

  @IsString()
  icon: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  id_rooms: string;
}
