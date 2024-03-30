import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoomsController } from "./rooms.controller";
import { RoomServices } from "./rooms.service";

import { Accounts } from 'src/accounts/accounts.entity';
import { Roles } from 'src/roles/roles.entity';
import { Rooms } from "./rooms.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles, Rooms])],
  controllers: [RoomsController],
  providers: [RoomServices],
})
export class RoomsModule {}