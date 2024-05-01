import { Controller, Get, Param } from '@nestjs/common';
import { RoomServices } from './rooms.service';
import { Rooms } from './rooms.entity';
import { Services } from 'src/services/services.entity';
import { get } from 'http';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomservice: RoomServices) {}

  @Get('abc')
  a() {
    return 'vao dc';
  }

  @Get()
  findAll(): Promise<any[]> {
    console.log(this.roomservice.findAll());
    return this.roomservice.findAll();
  }

  @Get('abcd/:id')
  getAllWhishlist(@Param('id') id: string): string {
    console.log('abc' + id);
    return 'Vao dc wishlist';
  }

  @Get(':id/services')
  getServicesByRoomId(@Param('id') id: string): Promise<any[]> {
    const roomId = parseInt(id);
    console.log('vao dc');
    return this.roomservice.getServicesByRoomId(roomId);
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
}
