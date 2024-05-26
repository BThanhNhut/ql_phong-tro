import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/CreateServiceDto';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesservice: ServicesService) {}

  @Get()
  findAllService(): Promise<any> {
    console.log('vao dc');
    return this.servicesservice.findAllService();
  }

  @Get(':id')
  findServicesByRoomId(@Param('id', ParseIntPipe) id: number) {
    console.log('vao dc id la', id);
    return this.servicesservice.findServicesByRoomId(id);
  }

  @Post(':roomId/add')
  async addServices(
    @Param('roomId') id: number,
    @Body() serviceList: CreateServiceDto[],
  ) {
    return this.servicesservice.addServices(id, serviceList);
  }
}
