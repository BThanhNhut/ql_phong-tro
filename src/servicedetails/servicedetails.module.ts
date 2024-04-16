import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Accounts } from 'src/accounts/accounts.entity';
import { Roles } from 'src/roles/roles.entity';
import { ServiceDetailsController } from './servicedetails.controller';
import { ServiceDetailsService } from './servicedetails.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles])],
  controllers: [ServiceDetailsController],
  providers: [ServiceDetailsService],
})
export class ServiceDetailsModule {}
