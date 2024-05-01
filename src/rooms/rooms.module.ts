import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsController } from './rooms.controller';
import { RoomServices } from './rooms.service';

import { Accounts } from 'src/accounts/accounts.entity';
import { Roles } from 'src/roles/roles.entity';
import { Rooms } from './rooms.entity';
import { Services } from 'src/services/services.entity';
import { Servicedetails } from 'src/servicedetails/servicedetails.entity';
import { Furniture } from 'src/furniture/furniture.entity';
import { Furnituredetails } from 'src/furnituredetails/furnituredetails.entity';
import { Images } from 'src/images/images.entity';
import { Amenities } from 'src/amenities/amenities.entity';
import { Amenitiesdetails } from 'src/amenitiesdetails/amenitiesdetails.entity';
import { Favorites } from 'src/favorites/favorites.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Accounts,
      Roles,
      Rooms,
      Services,
      Servicedetails,
      Furniture,
      Furnituredetails,
      Amenities,
      Amenitiesdetails,
      Images,
      Favorites,
    ]),
  ],
  controllers: [RoomsController],
  providers: [RoomServices],
})
export class RoomsModule {}
