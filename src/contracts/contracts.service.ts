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

  async findAll() {
    return this.contractsRepo.find();
  }

  findAllByIdAccount(id: number, status: boolean): Promise<any[]> {
    const result = this.contractsRepo
      .createQueryBuilder('constracts')
      .innerJoinAndSelect('constracts.accounts', 'accounts')
      .innerJoinAndSelect('constracts.rooms', 'rooms')
      .where('accounts.id = :id', { id })
      .andWhere('constracts.status = :status', { status })
      .getMany();
    return result;
  }

  async createContract(contractData: any): Promise<any> {
    try {
      const newContract = await this.contractsRepo.create(contractData);
      return await this.contractsRepo.save(newContract);
    } catch (error) {
      throw new Error(`Error creating contract: ${error}`);
    }
  }
}
