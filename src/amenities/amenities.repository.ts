import { IsNotEmpty } from "class-validator";
import { BaseDto } from "src/common/base.dto";

export class amenitiesDTO extends BaseDto {
  @IsNotEmpty()
  amenity_name: string;
  @IsNotEmpty()
  icon: string;
  @IsNotEmpty()
  status: boolean;
}