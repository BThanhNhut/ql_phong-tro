import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { FurnituredetailsService } from './furnituredetails.service';
import { CreateFurnituredetails } from './dto/CreateFurnituredetails.dto';

@Controller('furnituredetails')
export class FurnituredetailsController {
  constructor(
    private readonly furnituredetailsService: FurnituredetailsService,
  ) {}

  @Post('add')
  async createFurnituredetailsService(
    @Body() createFurnituredetailsDtos: CreateFurnituredetails[],
  ): Promise<any[]> {
    console.log('Vào dc thêm detail');
    return this.furnituredetailsService.createFurnituredetailsService(
      createFurnituredetailsDtos,
    );
  }
}
