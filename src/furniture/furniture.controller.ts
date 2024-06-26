import {
  Controller,
  Get,
  Injectable,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { FurnitureService } from './furniture.service';

@Controller('furniture')
export class FurnitureController {
  constructor(private readonly furnitureService: FurnitureService) {}

  @Get()
  findAllFurniture(): Promise<any[]> {
    return this.furnitureService.findAllFurniture();
  }

  @Get(':id')
  findServicesByRoomId(@Param('id', ParseIntPipe) id: number) {
    return this.furnitureService.findServicesByRoomId(id);
  }
}
