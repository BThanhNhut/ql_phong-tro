import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { JwtModule } from '@nestjs/jwt';
import { Accounts } from 'src/accounts/accounts.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Posttype } from 'src/posttype/posttype.entity';
import { Posts } from './posts.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Favorites } from 'src/favorites/favorites.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Accounts,
      Roles,
      Posttype,
      Posts,
      Rooms,
      Favorites,
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
