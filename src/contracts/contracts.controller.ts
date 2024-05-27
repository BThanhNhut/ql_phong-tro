import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContractsService } from './contracts.service';

@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractServices: ContractsService) {}
  @Get()
  findAll() {
    return this.contractServices.findAll();
  }

  @Get('accounts/:id/:status')
  findAllByIdAccount(
    @Param('id') id: number,
    @Param('status') status: boolean,
  ) {
    return this.contractServices.findAllByIdAccount(id, status);
  }

  @Post('create')
  createContract(@Body() newContract: any) {
    console.log(newContract);
    return this.contractServices.createContract(newContract);
  }

  @Post(':id/:status')
  async updateStatus(@Param('id') id: number, @Param('status') status: string) {
    const newStatus = status === 'true';
    return this.contractServices.updateContractStatus(id, newStatus);
  }
}
