import { Controller, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Amenitiesdetails } from './amenitiesdetails.entity';
import { Repository } from 'typeorm';
import { Rooms } from 'src/rooms/rooms.entity';
import { Amenities } from 'src/amenities/amenities.entity';
import { Createamenitiesdetails } from './dto/Createamenitiesdetails.dto';

@Injectable()
export class AmenitiesdetailsService {
  constructor(
    @InjectRepository(Amenitiesdetails)
    private amenitiesdetailsRepo: Repository<Amenitiesdetails>,
    @InjectRepository(Rooms)
    private readonly roomsRepo: Repository<Rooms>,
    @InjectRepository(Amenities)
    private readonly amenitiesRepo: Repository<Amenities>,
  ) {}

  async createAmenitiesdetailsService(
    createdetail: Createamenitiesdetails[],
  ): Promise<any[]> {
    const amenitiesdetailsArray: Amenitiesdetails[] = [];
    for (const dto of createdetail) {
      const { id_room, id_amenities } = dto;

      const room = await this.roomsRepo.findOne({ where: { id: id_room } });
      const amenities = await this.amenitiesRepo.findOne({
        where: { id: id_amenities },
      });

      if (!room || !amenities) {
        throw new Error(
          `Room or Amenities not found for id_room: ${id_room}, id_amenities: ${id_amenities}`,
        );
      }

      const amenitiesdetails = new Amenitiesdetails();
      amenitiesdetails.rooms = room;
      amenitiesdetails.amenities = amenities;
      amenitiesdetailsArray.push(amenitiesdetails);
    }
    return await this.amenitiesdetailsRepo.save(amenitiesdetailsArray);
  }
}
