import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Services } from './services.entity';
import { Repository } from 'typeorm';
import { Rooms } from 'src/rooms/rooms.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Services)
    private readonly servicesrepo: Repository<Services>,
  ) {}

  async findAllService(): Promise<any[]> {
    return this.servicesrepo.find();
  }

  async findServicesByRoomId(roomId: number): Promise<Services[]> {
    return await this.servicesrepo
      .createQueryBuilder('services')
      .innerJoinAndSelect('services.rooms', 'room')
      .where('room.id = :roomId', { roomId })
      .getMany();
  }
}
