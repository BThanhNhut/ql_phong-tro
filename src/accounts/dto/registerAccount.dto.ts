import { IsNotEmpty, IsNumberString, IsInt, IsString } from 'class-validator';

export class RegisterAccount {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  customer_name: string;
  @IsNotEmpty()
  phone_number: string;
  @IsString()
  address: string;
  @IsInt()
  roleId: number;
}
