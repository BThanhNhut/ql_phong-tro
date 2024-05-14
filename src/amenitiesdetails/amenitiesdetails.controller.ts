import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { AmenitiesdetailsService } from './amenitiesdetails.service';
import { Createamenitiesdetails } from './dto/Createamenitiesdetails.dto';

@Controller('amenitiesdetails')
export class AmenitiesdetailsController {
  constructor(
    private readonly amenitiesdetailsService: AmenitiesdetailsService,
  ) {}

  @Get()
  a() {
    return 'vao dc them nhiu ';
  }

  @Post('add')
  async createManyAmenitiesdetails(
    @Body() createAmenitiesdetailsDtos: Createamenitiesdetails[],
  ): Promise<any[]> {
    console.log('Vào dc thêm detail');
    return this.amenitiesdetailsService.createAmenitiesdetailsService(
      createAmenitiesdetailsDtos,
    );
  }
}
