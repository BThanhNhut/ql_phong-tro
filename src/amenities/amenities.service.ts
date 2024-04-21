import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Amenities } from './amenities.entity';

@Injectable()
export class AmenitiesService {
  constructor(
    @InjectRepository(Amenities)
    private readonly amenitiesrepo: Repository<Amenities>,
  ) {}

  async findServicesByRoomId(roomId: number): Promise<Amenities[]> {
    return await this.amenitiesrepo
      .createQueryBuilder('amenities')
      .innerJoin(
        'amenitiesdetails',
        'detail',
        'detail.id_amenities = amenities.id',
      )
      .innerJoin('rooms', 'room', 'room.id = detail.id_room')
      .where('room.id = :roomId', { roomId })
      .getMany();
  }
}
