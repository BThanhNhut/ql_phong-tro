import { InjectRepository } from '@nestjs/typeorm';
import { Types } from './types.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Types)
    private typesRepo: Repository<Types>,
  ) {}

  async findAllTypes(): Promise<any[]> {
    return this.typesRepo.find();
  }
}
