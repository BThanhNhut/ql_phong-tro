import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { Accounts } from 'src/accounts/accounts.entity';
import { AmenitiesController } from 'src/amenities/amenities.controller';
import { AmenitiesService } from 'src/amenities/amenities.service';
import { Amenities } from 'src/amenities/amenities.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Amenitiesdetails } from './amenitiesdetails.entity';
import { AmenitiesdetailsController } from './amenitiesdetails.controller';
import { AmenitiesdetailsService } from './amenitiesdetails.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Accounts,
      Roles,
      Amenities,
      Rooms,
      Amenitiesdetails,
    ]),
  ],
  controllers: [AmenitiesdetailsController],
  providers: [AmenitiesdetailsService],
})
export class AmenitiesdetailsModule {}
