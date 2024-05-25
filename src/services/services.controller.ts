import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ServicesService } from './services.service';

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
}
