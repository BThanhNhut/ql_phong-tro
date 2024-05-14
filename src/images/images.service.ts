import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Images } from './images.entity';
import { CreateImage, ListImage } from './dto/CreateImage.dto';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Images)
    private readonly imagesRepo: Repository<Images>,
  ) {}

  async createManyImages(createImagesDto: ListImage): Promise<Images[]> {
    const { id_rooms, urls } = createImagesDto;

    const imagesArray = urls.map((url) => {
      const image = new Images();
      image.url = url.url;
      image.rooms = { id: id_rooms } as any;
      return image;
    });

    return await this.imagesRepo.save(imagesArray);
  }
}
