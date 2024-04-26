import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Posttype } from 'src/posttype/posttype.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepo: Repository<Posts>,
    @InjectRepository(Posttype)
    private readonly posttypeRepo: Repository<Posttype>,
    @InjectRepository(Rooms)
    private readonly roomrepo: Repository<Rooms>,
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
        'rooms.name_room',
        'rooms.room_price',
        'rooms.area_width',
        'rooms.area_height',
        'rooms.number_of_people',
        'rooms.address',
        'rooms.province',
        'rooms.note',
        'accounts.customer_name',
      ])
      .getMany();
  }

  async getAllPost2(): Promise<any[]> {
    return this.postRepo
      .createQueryBuilder('posts')
      .innerJoinAndSelect('posts.posttype', 'posttype')
      .innerJoinAndSelect('posts.rooms', 'rooms')
      .innerJoinAndSelect('posts.accounts', 'accounts')
      .getMany();
  }

  async getDetailPost(id_room: any): Promise<any> {
    return this.postRepo
      .createQueryBuilder('posts')
      .leftJoinAndSelect('posts.posttype', 'posttype')
      .leftJoinAndSelect('posts.rooms', 'rooms')
      .select([
        'posts.id',
        'posts.title',
        'post.create_at',
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
  async getWishListById(): Promise<any[]> {
    return this.postRepo
      .createQueryBuilder('posts')
      .innerJoinAndSelect(
        'favorites',
        'favorites',
        'favorites.id_post = posts.id',
      )
      .innerJoinAndSelect(
        'accounts',
        'accounts',
        'favorites.id_accounts = accounts.id',
      )
      .where('accounts.id = :id', { id: 2 })
      .getMany();
  }
}
