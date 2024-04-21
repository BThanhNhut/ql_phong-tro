import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Services } from './services.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Services)
    private readonly servicesrepo: Repository<Services>,
  ) {}

  async findServicesByRoomId(roomId: number): Promise<Services[]> {
    return await this.servicesrepo
      .createQueryBuilder('services')
      .innerJoin('servicedetails', 'detail', 'detail.id_service = services.id')
      .innerJoin('rooms', 'room', 'room.id = detail.id_room')
      .where('room.id = :roomId', { roomId })
      .getMany();
  }
}
