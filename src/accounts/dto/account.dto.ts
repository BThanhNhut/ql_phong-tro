import { IsNotEmpty } from "class-validator";
import { Expose } from "class-transformer";
import { BaseDto } from "../../common/base.dto";

export class accountDTO extends BaseDto{
  @Expose()
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  customer_name: string;
  @IsNotEmpty()
  phone_number: string;
  @IsNotEmpty()
  address: string;
}