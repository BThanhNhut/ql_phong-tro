import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { Accounts } from 'src/accounts/accounts.entity';
import { FurnituredetailsController } from './furnituredetails.controller';
import { FurnituredetailsService } from './furnituredetails.service';
import { Furniture } from 'src/furniture/furniture.entity';
import { Furnituredetails } from './furnituredetails.entity';
import { Rooms } from 'src/rooms/rooms.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Accounts,
      Roles,
      Furniture,
      Furnituredetails,
      Rooms,
    ]),
  ],
  controllers: [FurnituredetailsController],
  providers: [FurnituredetailsService],
})
export class FurnituredetailsModule {}
