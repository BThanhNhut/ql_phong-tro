import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { AmenitiesdetailsService } from './amenitiesdetails.service';
import {
  Createamenitiesdetails,
  ListNumber,
} from './dto/Createamenitiesdetails.dto';

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
    @Body() listAmenities: ListNumber,
  ): Promise<any[]> {
    console.log('Vào dc thêm detail');

    const createAmenitiesdetailsDtos = listAmenities.numbers.map((item) => ({
      id_room: listAmenities.id_room,
      id_amenities: item,
    }));

    return this.amenitiesdetailsService.createAmenitiesdetailsService(
      createAmenitiesdetailsDtos,
    );
  }
}
