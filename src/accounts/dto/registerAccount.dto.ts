import { IsNotEmpty, IsNumberString, IsInt } from 'class-validator';

export class RegisterAccount {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  customer_name: string;

  @IsNumberString()
  phone_number: string;

  address: string;

  @IsInt()
  roleId: number;
}
