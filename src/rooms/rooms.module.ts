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
    ]),
  ],
  controllers: [RoomsController],
  providers: [RoomServices],
})
export class RoomsModule {}
