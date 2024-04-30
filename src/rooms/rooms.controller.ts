import { Controller, Get, Param } from '@nestjs/common';
import { RoomServices } from './rooms.service';
import { Rooms } from './rooms.entity';
import { Services } from 'src/services/services.entity';

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
    return this.roomservice.getFurnitureByRoomId(roomId);
  }
}
