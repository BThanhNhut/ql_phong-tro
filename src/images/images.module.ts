import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { JwtModule } from '@nestjs/jwt';
import { Accounts } from 'src/accounts/accounts.entity';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { Images } from './images.entity';
import { Rooms } from 'src/rooms/rooms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles, Images, Rooms])],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
