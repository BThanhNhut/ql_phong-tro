import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContractsService } from './contracts.service';

@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractServices: ContractsService) {}
  @Get()
  findAll() {
    return this.contractServices.findAll();
  }

  @Get('accounts/:id')
  findAllByIdAccount(@Param('id') id: number) {
    return this.contractServices.findAllByIdAccount(id);
  }

  @Post('create')
  createContract(@Body() newContract: any) {
    console.log(newContract);
    return this.contractServices.createContract(newContract);
  }
}
