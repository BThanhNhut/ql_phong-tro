import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Favorites } from './favorites.entity';
import { favoritesService } from './favorites.service';

@Controller('favorites')
export class favoritesController {
  constructor(private readonly favoritesService: favoritesService) {}

  @Post('add/:id_account/:id_post')
  addFavorite(
    @Param('id_account', ParseIntPipe) id_account: number,
    @Param('id_post', ParseIntPipe) id_post: number,
  ): Promise<Favorites> {
    return this.favoritesService.addFavorite(id_account, id_post);
  }

  @Post('remove/:id_account/:id_post')
  removeFavorite(
    @Param('id_account', ParseIntPipe) id_account: number,
    @Param('id_post', ParseIntPipe) id_post: number,
  ): Promise<void> {
    return this.favoritesService.removeFavorite(id_account, id_post);
  }
}
