// src/accounts/dto/create-account.dto.ts
export class CreateAccount {
  username: string;
  password: string;
  customer_name: string;
  phone_number: string;
  address: string;
  roleId: number; // id của vai trò (role)
}
