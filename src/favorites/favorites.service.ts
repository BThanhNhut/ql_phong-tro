import { Controller, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorites } from './favorites.entity';
import { Repository } from 'typeorm';

@Injectable()
export class favoritesService {
  constructor(
    @InjectRepository(Favorites)
    private readonly favoritesRepo: Repository<Favorites>,
  ) {}

  async addFavorite(accountId: number, postId: number): Promise<Favorites> {
    const favorite = new Favorites();
    favorite.status = true;
    favorite.accounts = { id: accountId } as any;
    favorite.posts = { id: postId } as any;

    return await this.favoritesRepo.save(favorite);
  }

  async removeFavorite(accountId: number, postId: number): Promise<void> {
    await this.favoritesRepo.delete({
      accounts: { id: accountId },
      posts: { id: postId },
    });
  }
}
