import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { Accounts } from 'src/accounts/accounts.entity';
import { AmenitiesController } from './amenities.controller';
import { Amenities } from './amenities.entity';
import { AmenitiesService } from './amenities.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles, Amenities])],
  controllers: [AmenitiesController],
  providers: [AmenitiesService],
})
export class AmenitiesModule {}
