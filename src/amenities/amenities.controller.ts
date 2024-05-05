import {
  Controller,
  Get,
  Injectable,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { AmenitiesService } from './amenities.service';

@Controller('amenities')
export class AmenitiesController {
  constructor(private readonly amenitiesService: AmenitiesService) {}

  @Get()
  findAllAmenitie(): Promise<any[]> {
    return this.amenitiesService.findAllAmenitie();
  }

  @Get(':id')
  findServicesByRoomId(@Param('id', ParseIntPipe) id: number) {
    return this.amenitiesService.findServicesByRoomId(id);
  }
}
