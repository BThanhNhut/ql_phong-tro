import {
  Controller,
  Get,
  Injectable,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ServiceDetailsService } from './servicedetails.service';
import { get } from 'http';

@Controller('servicedetails')
export class ServiceDetailsController {
  constructor(private readonly servicedetailservices: ServiceDetailsService) {}

  @Get(':id')
  getAccountById(@Param('id', ParseIntPipe) id: number): Promise<any> {
    console.log(id);
    return this.servicedetailservices.findServicesByRoomId(id);
  }
}
