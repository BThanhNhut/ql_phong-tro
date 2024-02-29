import { Body, Controller, Get, Param, ParseIntPipe, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { accountDTO } from 'src/accounts/dto/account.dto';
import { AccountsService } from './accounts.service';
import { plainToClass } from 'class-transformer';
import { ModuleRef } from '@nestjs/core';

@Controller('/accounts')
export class AccountsController {


  constructor(private readonly accountservicxe: AccountsService){
  }

  @Get()
  getAllUser() {
    return [
      {
        id: '1',
        name: 'Bien thanh Nhut',
      },
      {
        id: '2',
        name: 'Le Thanh Long',
      },
    ];
  }

  @Get(':id')
  getAccountById(@Param('id', ParseIntPipe) id: number) {
    
    console.log(id);
    return 'ket qua la' + id;
  }

  @Post()
  createAccount(@Body() account: accountDTO) {
    const userreal = plainToClass(accountDTO,account,{excludeExtraneousValues:true});
    console.log(userreal);


    return this.accountservicxe.createuser(account);
  }
}