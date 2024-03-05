import { Injectable } from "@nestjs/common";
import { AccountsService } from "./accounts.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private accountsservice: AccountsService,
    private jwtService: JwtService,
  ) {}
}