import { Body, Controller, Get, Param, ParseIntPipe, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { Accounts } from 'src/accounts/dto/account.dto';
import { AccountsService } from './accounts.service';
import { plainToClass } from 'class-transformer';
import { ModuleRef } from '@nestjs/core';

@Controller('/accounts')
export class AccountsController {

  constructor(private readonly accountsservicxe: AccountsService) {}

  @Get()
  findAll(): Promise<Accounts[]> {
    return this.accountsservicxe.findAll();
  }

  @Get(':id')
  getAccountById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return 'ket qua la' + id;
  }

  // @Post()
  // createAccount(@Body() account: AccountDTO) {
  //   const userreal = plainToClass(AccountDTO,account,{excludeExtraneousValues:true});
  //   console.log(userreal);

  //   return this.accountservicxe.createuser(account);
  // }
}