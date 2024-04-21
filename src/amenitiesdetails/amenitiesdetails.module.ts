import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { Accounts } from 'src/accounts/accounts.entity';
import { AmenitiesController } from 'src/amenities/amenities.controller';
import { AmenitiesService } from 'src/amenities/amenities.service';
import { Amenities } from 'src/amenities/amenities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles, Amenities])],
  controllers: [AmenitiesController],
  providers: [AmenitiesService],
})
export class AmenitiesdetailsModule {}
