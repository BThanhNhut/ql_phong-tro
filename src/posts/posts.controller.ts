import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsservice: PostsService) {}

  @Get()
  findAll(): Promise<any[]> {
    return this.postsservice.getAllPost();
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
}
