import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { Accounts } from 'src/accounts/accounts.entity';
import { favoritesController } from './favorites.controller';
import { favoritesService } from './favorites.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles])],
  controllers: [favoritesController],
  providers: [favoritesService],
})
export class FavoritesModule {}
