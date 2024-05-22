import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Posttype } from 'src/posttype/posttype.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { DeepPartial, Repository } from 'typeorm';
import { promises } from 'dns';
import { Favorites } from 'src/favorites/favorites.entity';
import { Accounts } from 'src/accounts/accounts.entity';
import { CreatePostDto } from './dto/CreatePost.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepo: Repository<Posts>,
    @InjectRepository(Posttype)
    private readonly posttypeRepo: Repository<Posttype>,
    @InjectRepository(Favorites)
    private readonly favoritesRepo: Repository<Favorites>,
    @InjectRepository(Accounts)
    private readonly accountsRepo: Repository<Accounts>,
    @InjectRepository(Rooms)
    private readonly roomsRepo: Repository<Rooms>,
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
        'posts.status',

        'rooms.id',
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
        'rooms.note_gender',
        'rooms.province',
        'rooms.district',
        'rooms.ward',

        'accounts.id',
        'accounts.customer_name',
      ])
      .getMany();
  }

  async getDetailPost(id_room: any): Promise<any> {
    return this.postRepo
      .createQueryBuilder('posts')
      .innerJoinAndSelect('posts.posttype', 'posttype')
      .innerJoinAndSelect('posts.rooms', 'rooms')
      .innerJoinAndSelect('rooms.types', 'types')
      .innerJoinAndSelect('posts.accounts', 'accounts')
      .select([
        'posts.id',
        'posts.title',
        'posts.create_at',

        'rooms.id',
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
        'rooms.note_gender',
        'rooms.province',
        'rooms.district',
        'rooms.ward',

        'types.type_name',
        'types.status',

        'accounts.id',
        'accounts.customer_name',
        'accounts.avatar',
      ])
      .where('posts.id = :id', { id: id_room })
      .getOne();
  }

  async createPost(createPostDto: CreatePostDto) {
    const posttype = await this.posttypeRepo.findOne({
      where: { id: createPostDto.posttype },
    });
    const rooms = await this.roomsRepo.findOne({
      where: { id: createPostDto.rooms },
    });
    const accounts = await this.accountsRepo.findOne({
      where: { id: createPostDto.accounts },
    });
    if (!posttype || !rooms || !accounts) {
      throw new NotFoundException('Related entity not found');
    }
    const newPost = this.postRepo.create({
      ...createPostDto,
      posttype,
      rooms,
      accounts,
    });
    return this.postRepo.save(newPost);
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
        'rooms.room_price',
        'rooms.area_width',
        'rooms.area_height',
        'rooms.number_of_people',
        'rooms.address',
        'rooms.province',
        'rooms.note_gender',
        'rooms.note',
        'rooms.image',
      ])
      .where('accounts.id = :id', { id })
      .getMany();
  }

  async coutPostByAccountId(id: number): Promise<number> {
    const count = await this.postRepo
      .createQueryBuilder('posts')
      .innerJoin('posts.accounts', 'accounts')
      .where('accounts.id = :id', { id: id })
      .getCount();
    return count;
  }

  async coutPostByAccountIdinfoActive(id: number): Promise<any[]> {
    return this.postRepo
      .createQueryBuilder('posts')
      .leftJoinAndSelect('posts.posttype', 'posttype')
      .leftJoinAndSelect('posts.rooms', 'rooms')
      .leftJoinAndSelect('posts.accounts', 'accounts')
      .select([
        'posts.id',
        'posts.title',
        'posts.create_at',

        'rooms.id',
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
        'rooms.note_gender',
        'rooms.province',
        'rooms.district',
        'rooms.ward',

        'accounts.customer_name',
      ])
      .where('accounts.id = :id', { id })
      .andWhere('posts.status = :status', { status: true })
      .getMany();
  }

  async coutPostByAccountIdinfoUnactive(id: number): Promise<any[]> {
    return this.postRepo
      .createQueryBuilder('posts')
      .leftJoinAndSelect('posts.posttype', 'posttype')
      .leftJoinAndSelect('posts.rooms', 'rooms')
      .leftJoinAndSelect('posts.accounts', 'accounts')
      .select([
        'posts.id',
        'posts.title',
        'posts.create_at',

        'rooms.id',
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
        'rooms.note_gender',
        'rooms.province',
        'rooms.district',
        'rooms.ward',

        'accounts.customer_name',
      ])
      .where('accounts.id = :id', { id })
      .andWhere('posts.status = :status', { status: false })
      .getMany();
  }

  //
  async updateStatus(id: number, newStatus: boolean): Promise<Posts> {
    const post = await this.postRepo.findOneBy({ id });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    post.status = newStatus;
    await this.postRepo.save(post);
    return post;
  }
}
