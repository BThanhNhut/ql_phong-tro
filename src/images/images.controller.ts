import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { ListImage } from './dto/CreateImage.dto';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('add')
  createManyImages(@Body() listImage: ListImage): Promise<any[]> {
    return this.imagesService.createManyImages(listImage);
  }
}
