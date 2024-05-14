import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contracts } from './contracts.entity';

@Injectable()
export class ContractsService {
  constructor(
    @InjectRepository(Contracts)
    private contractsRepo: Repository<Contracts>,
  ) {}
}
