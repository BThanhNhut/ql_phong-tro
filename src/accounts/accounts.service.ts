import { Accounts } from '../accounts/accounts.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterAccount } from './dto/registerAccount.dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Accounts)
    private accountRepository: Repository<Accounts>,
  ) {}

  async findAll(): Promise<Accounts[]> {
    return this.accountRepository.find();
  }

  createAccount(requestbody: RegisterAccount) {
    const account = this.accountRepository.create(requestbody);
    return this.accountRepository.save(account);
  }

  findByUsername(username: string) {
    return this.accountRepository.findOneBy({ username });
  }
}
