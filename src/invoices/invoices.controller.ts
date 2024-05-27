import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  findAll() {
    return this.invoicesService.findAll();
  }

  @Get('accounts/:id/:status')
  findAllByIdAccount(
    @Param('id') id: number,
    @Param('status') status: boolean,
  ) {
    return this.invoicesService.findAllByIdAccount(id, status);
  }

  @Post('create')
  createInvoices(@Body() newInvoice: any) {
    console.log(newInvoice);
    return this.invoicesService.createInvoices(newInvoice);
  }

  @Post(':id/:status')
  async updateStatus(@Param('id') id: number, @Param('status') status: string) {
    const newStatus = status === 'true';
    return this.invoicesService.updateInvoiceStatus(id, newStatus);
  }
}
