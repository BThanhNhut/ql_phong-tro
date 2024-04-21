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
    return this.postsservice.getDetailPost(id);
  }
}
