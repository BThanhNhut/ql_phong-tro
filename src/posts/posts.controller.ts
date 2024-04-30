import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsservice: PostsService) {}

  @Get()
  findAll(): Promise<any[]> {
    return this.postsservice.getAllPost2();
  }

  @Get(':id')
  getAccountById(@Param('id', ParseIntPipe) id: number): Promise<any> {
    console.log(id);
    console.log(this.postsservice.getDetailPost(id));
    return this.postsservice.getDetailPost(id);
  }

  @Get('whistlist/:id')
  getWishListById(@Param('id', ParseIntPipe) id: number): Promise<any[]> {
    console.log('Vào dc wishlist');
    return this.postsservice.getWishListById(id);
  }
}
