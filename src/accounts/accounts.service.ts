import { Accounts } from "../accounts/accounts.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Accounts)
    private accountRepository: Repository<Accounts>,
  ) {}

  async findAll(): Promise<Accounts[]> {
    return this.accountRepository.find();
  }

  createAccount(requestbody: any) {
    const account = this.accountRepository.create(requestbody);
    return this.accountRepository.save(account);
  }
}