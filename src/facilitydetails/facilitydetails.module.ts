import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { Accounts } from 'src/accounts/accounts.entity';
import { FacilitydetailsController } from './facilitydetails.controller';
import { FacilitydetailsService } from './facilitydetails.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles])],
  controllers: [FacilitydetailsController],
  providers: [FacilitydetailsService],
})
export class FacilitydetailsModule {}
