import { IsNotEmpty } from "class-validator";

export class RegisterAccount {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  customer_name: string;
  phone_number: string;
  address: string;
  roleId: number; // id của vai trò (role)
}
