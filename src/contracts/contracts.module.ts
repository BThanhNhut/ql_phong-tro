import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { ContractsController } from './contracts.controller';
import { ContractsService } from './contracts.service';
import { Accounts } from 'src/accounts/accounts.entity';
import { Contracts } from './contracts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roles, Accounts, Contracts])],
  controllers: [ContractsController],
  providers: [ContractsService],
})
export class ContractsModule {}
