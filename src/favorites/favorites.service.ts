import { Controller, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorites } from './favorites.entity';
import { Repository } from 'typeorm';

@Injectable()
export class favoritesService {
  constructor(
    @InjectRepository(Favorites)
    private readonly favoritesrepo: Repository<Favorites>,
  ) {}
}
