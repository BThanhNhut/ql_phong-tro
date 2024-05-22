import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  findAll() {
    return this.invoicesService.findAll();
  }

  @Post('create')
  createInvoices(@Body() newInvoice: any) {
    console.log(newInvoice);
    // return this.invoicesService.createInvoices(newInvoice);
  }
}
