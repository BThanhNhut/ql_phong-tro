import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Accounts } from 'src/accounts/accounts.entity';
import { Roles } from 'src/roles/roles.entity';
import { ServiceDetailsController } from './servicedetails.controller';
import { ServiceDetailsService } from './servicedetails.service';
import { Services } from 'src/services/services.entity';
import { Rooms } from 'src/rooms/rooms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles, Services, Rooms])],
  controllers: [ServiceDetailsController],
  providers: [ServiceDetailsService],
})
export class ServiceDetailsModule {}
