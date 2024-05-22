import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoices } from './invoices.entity';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoices)
    private invoicesRepo: Repository<Invoices>,
  ) {}

  async findAll() {
    return this.invoicesRepo.find();
  }

  async createInvoices(invoicesData: any) {
    try {
      console.log('vao dc invoice');
      const newContract = await this.invoicesRepo.create(invoicesData);
      return await this.invoicesRepo.save(newContract);
    } catch (error) {
      throw new Error(`Error creating contract: ${error}`);
    }
  }
}
