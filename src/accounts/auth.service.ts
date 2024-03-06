import { BadRequestException, Injectable } from "@nestjs/common";
import { AccountsService } from "./accounts.service";
import { JwtService } from "@nestjs/jwt";
import { RegisterAccount } from "./dto/registerAccount.dto";
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private accountsservice: AccountsService,
    private jwtService: JwtService,
  ) {};

  async registerAccount(requestBody: RegisterAccount){
    console.log("au au")
    const username = await this.accountsservice.findByUsername(requestBody.username);
    if(username){
      throw new BadRequestException('Username already exist');
    }
    //hash password
    const hashpassword = await bcrypt.hash(requestBody.password,10);
    requestBody.password = hashpassword;

    //save user
    const saveaccount  = await this.accountsservice.createAccount(requestBody);

    // generate jwt token
    const payload = {
      id: saveaccount.id,
      username: saveaccount.username,
      customer_name: saveaccount.customer_name,
      password: saveaccount.username,
      roleId: saveaccount.roleId,
    };
    
    const access_token  = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });

    return {
      msg: 'Account has been created',
      access_token,
    };
  }
}