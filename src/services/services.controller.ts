import {
  Controller,
  Get,
  Injectable,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesservice: ServicesService) {}

  @Get()
  findAllService(): Promise<any> {
    return this.servicesservice.findAllService();
  }

  @Get(':id')
  findServicesByRoomId(@Param('id', ParseIntPipe) id: number) {
    return this.servicesservice.findServicesByRoomId(id);
  }
}
