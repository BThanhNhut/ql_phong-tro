import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { JwtModule } from '@nestjs/jwt';
import { Accounts } from 'src/accounts/accounts.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
