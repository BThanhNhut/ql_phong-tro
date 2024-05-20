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

  findAllByIdAccount(id: number): Promise<any[]> {
    const result = this.contractsRepo
      .createQueryBuilder('constracts')
      .innerJoinAndSelect('constracts.accounts', 'accounts')
      .where('accounts.id = :id', { id })
      .getMany();
    return result;
  }

  async createContract(contractData: any): Promise<any> {
    try {
      console.log('vao dc');
      const newContract = await this.contractsRepo.create(contractData);
      return await this.contractsRepo.save(newContract);
    } catch (error) {
      throw new Error(`Error creating contract: ${error}`);
    }
  }
}
