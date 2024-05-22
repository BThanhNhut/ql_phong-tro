import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { promises } from 'dns';
import { CreatePostDto } from './dto/CreatePost.dto';
import { Posts } from './posts.entity';
import { plainToInstance } from 'class-transformer';

@Controller('posts')
export class PostsController {
  constructor(private postsservice: PostsService) {}

  @Get()
  findAll(): Promise<any[]> {
    return this.postsservice.getAllPost();
  }

  @Post('create')
  async createPost(@Body() createPostDto: CreatePostDto): Promise<Posts> {
    console.log('vao dc tao post');
    const post = await this.postsservice.createPost(createPostDto);
    return post;
  }

  @Get('listactive/:id')
  coutPostByAccountIdinfoActive(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<any[]> {
    return this.postsservice.coutPostByAccountIdinfoActive(id);
  }

  @Get('listunactive/:id')
  coutPostByAccountIdinfoUnactive(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<any[]> {
    return this.postsservice.coutPostByAccountIdinfoUnactive(id);
  }

  @Get(':id')
  getAccountById(@Param('id', ParseIntPipe) id: number): Promise<any> {
    console.log(id);
    console.log(this.postsservice.getDetailPost(id));
    return this.postsservice.getDetailPost(id);
  }

  @Get('whishlist/:id')
  getWishListById(@Param('id', ParseIntPipe) id: number): Promise<any[]> {
    console.log('Vào dc wishlist');
    return this.postsservice.getWishListById(id);
  }

  @Get('count/:id')
  coutPostByAccountId(@Param('id', ParseIntPipe) id: number): Promise<number> {
    console.log('vao dc dem');
    return this.postsservice.coutPostByAccountId(id);
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: number, @Body('status') status: boolean) {
    return await this.postsservice.updateStatus(id, status);
  }
}
