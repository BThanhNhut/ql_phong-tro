import { IsNotEmpty, IsNumberString, IsInt, IsString } from 'class-validator';

export class RegisterAccount {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  customer_name: string;
  @IsString()
  @IsNumberString()
  phone_number: string;
  @IsString()
  address: string;

  @IsInt()
  roleId: number;
}
