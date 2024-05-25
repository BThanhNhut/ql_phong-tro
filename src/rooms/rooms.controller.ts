import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoomServices } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomservice: RoomServices) {}

  @Get()
  findAll(): Promise<any[]> {
    console.log(this.roomservice.findAll());
    return this.roomservice.findAll();
  }

  @Get('all')
  findAll2(): Promise<any[]> {
    return this.roomservice.findAll2();
  }

  @Get('account/:id')
  listRoomByAccountId(@Param('id') id: number): Promise<any[]> {
    return this.roomservice.listRoomByAccountId(id);
  }

  @Get(':id')
  findRommById(@Param('id') id: number): Promise<any> {
    return this.roomservice.findRommById(id);
  }

  @Post('add')
  createRoom(@Body() requestBody: any) {
    console.log(requestBody);
    return this.roomservice.createRoom(requestBody);
  }

  @Get('abcd/:id')
  getAllWhishlist(@Param('id') id: string): string {
    console.log('abc' + id);
    return 'Vao dc wishlist';
  }

  @Get(':id/furniture')
  getFurnitureByRoomId(@Param('id') id: string): Promise<any[]> {
    const roomId = parseInt(id);
    console.log('vao dc fur');
    return this.roomservice.getFurnitureByRoomId(roomId);
  }

  @Get(':id/amenities')
  getAmenitiesByRoomId(@Param('id') id: string): Promise<any[]> {
    const roomId = parseInt(id);
    console.log('vao dc fur');
    return this.roomservice.getAmenitiesByRoomId(roomId);
  }

  @Get(':id/images')
  getRoomImages(@Param('id') id: string): Promise<string[]> {
    const roomId = parseInt(id);
    console.log('Vào images');
    return this.roomservice.getRoomImages(roomId);
  }

  @Get(':id_account/:id_post/favorites')
  getFavorites(
    @Param('id_account') idAccount: string,
    @Param('id_post') idPost: string,
  ): Promise<any> {
    const accoutId = parseInt(idAccount);
    const postId = parseInt(idPost);
    console.log('accout:' + accoutId + 'post' + postId);
    return this.roomservice.getFavorites(accoutId, postId);
  }

  @Get('count/:id')
  countRoomByAccountId(@Param('id') id: number) {
    return this.roomservice.countRoomByAccountId(id);
  }
}
