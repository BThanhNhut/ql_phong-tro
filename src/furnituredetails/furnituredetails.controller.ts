import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { FurnituredetailsService } from './furnituredetails.service';
import {
  CreateFurnituredetails,
  ListNumber,
} from './dto/CreateFurnituredetails.dto';

@Controller('furnituredetails')
export class FurnituredetailsController {
  constructor(
    private readonly furnituredetailsService: FurnituredetailsService,
  ) {}

  @Post('add')
  async createFurnituredetailsService(
    @Body() listfurniture: ListNumber,
  ): Promise<any[]> {
    console.log('Vào dc thêm detail');

    const createFurnituredetailsDtos = listfurniture.numbers.map((item) => ({
      id_room: listfurniture.id_room,
      id_furniture: item,
    }));

    return this.furnituredetailsService.createFurnituredetailsService(
      createFurnituredetailsDtos,
    );
  }
}
