import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Accounts } from 'src/accounts/accounts.entity';
import { AccountsService } from './accounts.service';
import { plainToClass } from 'class-transformer';
import { ModuleRef } from '@nestjs/core';
import { CreateAccount } from './dto/CreateAccount ';
import { RegisterAccount } from './dto/registerAccount.dto';
import { AuthService } from './auth.service';
import { LoginAccount } from './dto/loginAccount';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly accountsservice: AccountsService,
    private authservice: AuthService,
  ) {}

  @Get()
  // @UseGuards(AuthGuard)
  findAll(): Promise<Accounts[]> {
    return this.accountsservice.findAll();
  }

  @Get(':id')
  getAccountById(@Param('id', ParseIntPipe) id: number) {
    return this.accountsservice.getAccountById(id);
  }

  @Post('register')
  async registerAccount(@Body() requestBody: RegisterAccount) {
    console.log('vao dc');
    const result = await this.authservice.registerAccount(requestBody);
    return result;
  }

  @Post('login')
  loginAccount(@Body() requestBody: LoginAccount) {
    return this.authservice.loginAccount(requestBody);
  }

  @Post('check/:username')
  checkAccount(@Param('username') username: string) {
    return this.accountsservice.findByUsername(username);
  }

  // @Post()
  // createAccount(@Body() requestbody: CreateAccount) {
  //   console.log(requestbody);
  //   return this.accountsservicxe.createAccount(requestbody);
  // }

  // @Post()
  // createAccount(@Body() account: AccountDTO) {
  //   const userreal = plainToClass(AccountDTO,account,{excludeExtraneousValues:true});
  //   console.log(userreal);

  //   return this.accountservicxe.createuser(account);
  // }
}
