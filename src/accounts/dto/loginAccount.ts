import { IsNotEmpty } from "class-validator";

export class LoginAccount {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
}
