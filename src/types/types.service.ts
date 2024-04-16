import { InjectRepository } from '@nestjs/typeorm';
import { Types } from './types.entity';
import { Repository } from 'typeorm';

export class TypesService {
  constructor(
    @InjectRepository(Types)
    private accountRepository: Repository<Types>,
  ) {}
}
