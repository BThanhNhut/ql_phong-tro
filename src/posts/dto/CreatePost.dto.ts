import { IsBoolean, IsDate, IsInt, IsString } from 'class-validator';

// src/accounts/dto/create-account.dto.ts
export class CreatePostDto {
  @IsString()
  title: string;

  @IsDate()
  create_at: Date;

  @IsBoolean()
  status: boolean;

  @IsInt()
  posttype: number;

  @IsInt()
  rooms: number;

  @IsInt()
  accounts: number;
}
