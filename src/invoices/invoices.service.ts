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
}
