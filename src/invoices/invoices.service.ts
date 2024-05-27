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

  findAllByIdAccount(id: number, status: boolean): Promise<any[]> {
    const result = this.invoicesRepo
      .createQueryBuilder('invoices')
      .innerJoinAndSelect('invoices.contracts', 'contracts')
      .innerJoinAndSelect('invoices.accounts', 'accounts')
      .where('accounts.id = :id', { id })
      .andWhere('invoices.status = :status', { status })
      .getMany();
    return result;
  }

  async createInvoices(invoicesData: any) {
    try {
      const newContract = await this.invoicesRepo.create(invoicesData);
      return await this.invoicesRepo.save(newContract);
    } catch (error) {
      throw new Error(`Error creating contract: ${error}`);
    }
  }

  async updateInvoiceStatus(id: number, newStatus: boolean): Promise<Invoices> {
    const invoice = await this.invoicesRepo.findOneBy({ id });
    if (!invoice) {
      console.log('error');
    }
    invoice.status = newStatus;
    return this.invoicesRepo.save(invoice);
  }
}
