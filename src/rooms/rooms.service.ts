import { Injectable } from '@nestjs/common';
import { Rooms } from './rooms.entity';
import { Services } from 'src/services/services.entity';
import { Repository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceDetailsService } from 'src/servicedetails/servicedetails.service';
import { Servicedetails } from 'src/servicedetails/servicedetails.entity';
import { Furnituredetails } from 'src/furnituredetails/furnituredetails.entity';
import { Images } from 'src/images/images.entity';

@Injectable()
export class RoomServices {
  constructor(
    @InjectRepository(Rooms)
    private roomsRepo: Repository<Rooms>,
    @InjectRepository(Servicedetails)
    private servicedetailsRepo: Repository<Servicedetails>,
    @InjectRepository(Furnituredetails)
    private furnituredetailsRepo: Repository<Furnituredetails>,
    @InjectRepository(Images)
    private imagesRepo: Repository<Images>,
  ) {}

  async findAll(): Promise<Rooms[]> {
    return this.roomsRepo.find();
  }

  async getServicesByRoomId(roomId: number): Promise<any[]> {
    return this.servicedetailsRepo
      .createQueryBuilder('servicedetails')
      .innerJoinAndSelect('servicedetails.rooms', 'rooms')
      .innerJoinAndSelect('servicedetails.services', 'services')
      .select([
        'servicedetails.id',
        'services.id',
        'services.service_name',
        'services.cost',
        'services.note',
        'services.icon',
        'services.status',
      ])
      .where('rooms.id = :roomId', { roomId })
      .getMany();
  }

  async getFurnitureByRoomId(roomId: number): Promise<any[]> {
    return this.furnituredetailsRepo
      .createQueryBuilder('furnituredetails')
      .innerJoinAndSelect('furnituredetails.rooms', 'rooms')
      .innerJoinAndSelect('furnituredetails.furniture', 'furniture')
      .select([
        'furnituredetails.id',
        'furniture.id',
        'furniture.furniture_name',
        'furniture.icon',
        'furniture.status',
      ])
      .where('rooms.id = :roomId', { roomId })
      .getMany();
  }

  async getAmenitiesByRoomId(roomId: number): Promise<any[]> {
    return this.furnituredetailsRepo
      .createQueryBuilder('amenitiesdetails')
      .innerJoinAndSelect('amenitiesdetails.rooms', 'rooms')
      .innerJoinAndSelect('amenitiesdetails.amenities', 'amenities')
      .select([
        'amenitiesdetails.id',
        'amenities.id',
        'amenities.amenity_name',
        'amenities.icon',
        'amenities.status',
      ])
      .where('rooms.id = :roomId', { roomId })
      .getMany();
  }

  async getRoomImages(id: number): Promise<string[]> {
    const room = await this.roomsRepo.findOneBy({ id });
    if (!room) {
      throw new Error('Room not found');
    }

    const images = await this.imagesRepo.find({ where: { rooms: room } });
    return images.map((image) => image.url);
  }
}
