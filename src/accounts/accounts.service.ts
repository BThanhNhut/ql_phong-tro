import { Accounts } from "src/accounts/dto/account.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Accounts)
    private postRepository: Repository<Accounts>,
  ) {}

  async findAll(): Promise<Accounts[]> {
    return this.postRepository.find();
  }
}