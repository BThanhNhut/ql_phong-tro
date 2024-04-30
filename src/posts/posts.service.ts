import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Posttype } from 'src/posttype/posttype.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';
import { Favorites } from 'src/favorites/favorites.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepo: Repository<Posts>,
    @InjectRepository(Posttype)
    private readonly posttypeRepo: Repository<Posttype>,
    @InjectRepository(Favorites)
    private readonly favoritesRepo: Repository<Favorites>,
  ) {}
  async getAllPost(): Promise<any[]> {
    return this.postRepo
      .createQueryBuilder('posts')
      .leftJoinAndSelect('posts.posttype', 'posttype')
      .leftJoinAndSelect('posts.rooms', 'rooms')
      .leftJoinAndSelect('posts.accounts', 'accounts')
      .select([
        'posts.id',
        'posts.title',
        'posts.create_at',
        'rooms.name_room',
        'rooms.room_price',
        'rooms.area_width',
        'rooms.area_height',
        'rooms.number_of_people',
        'rooms.address',
        'rooms.province',
        'rooms.note_gender',
        'rooms.note',
        'rooms.image',
        'accounts.customer_name',
      ])
      .getMany();
  }

  async getAllPost2(): Promise<any[]> {
    return (
      this.postRepo
        .createQueryBuilder('posts')
        .innerJoinAndSelect('posts.posttype', 'posttype')
        .innerJoinAndSelect('posts.rooms', 'rooms')
        .innerJoinAndSelect('posts.accounts', 'accounts')
        // .select(['posts.id', 'posts.title', 'posts.create_at'])
        .getMany()
    );
  }

  async getDetailPost(id_room: any): Promise<any> {
    return this.postRepo
      .createQueryBuilder('posts')
      .leftJoinAndSelect('posts.posttype', 'posttype')
      .leftJoinAndSelect('posts.rooms', 'rooms')
      .select([
        'posts.id',
        'posts.title',
        'posts.create_at',
        'rooms.name_room',
        'rooms.room_price',
        'rooms.area_width',
        'rooms.area_height',
        'rooms.number_of_people',
        'rooms.address',
        'rooms.province',
        'rooms.note',
      ])
      .where('posts.id = :id', { id: id_room })
      .getOne();
  }

  async createPost(createPostDto: any): Promise<any> {
    const newPost = this.posttypeRepo.create(createPostDto);
    return this.posttypeRepo.save(newPost);
  }

  //
  async getWishListById(id: number): Promise<any[]> {
    return this.favoritesRepo
      .createQueryBuilder('favorites')
      .innerJoinAndSelect('favorites.posts', 'posts')
      .innerJoinAndSelect('posts.rooms', 'rooms')
      .innerJoinAndSelect('favorites.accounts', 'accounts')
      .select([
        'favorites.id',
        'posts.id',
        'posts.title',
        'posts.create_at',

        'rooms.name_room',
        'rooms.address',
        'rooms.room_price',
        'rooms.deposit_price',
        'rooms.image',
        'rooms.area_width',
        'rooms.area_height',
        'rooms.phone_number',
        'rooms.floor',
        'rooms.number_of_people',
        'rooms.note',
        'rooms.province',
        'rooms.district',
        'rooms.ward',
      ])
      .where('accounts.id = :id', { id })
      .getMany();
  }
}
