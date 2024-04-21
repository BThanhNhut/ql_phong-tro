import { Controller, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Furniture } from './furniture.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FurnitureService {
  constructor(
    @InjectRepository(Furniture)
    private readonly servicesrepo: Repository<Furniture>,
  ) {}

  async findServicesByRoomId(roomId: number): Promise<Furniture[]> {
    return await this.servicesrepo
      .createQueryBuilder('furniture')
      .innerJoin(
        'furnituredetails',
        'detail',
        'detail.id_furniture = furniture.id',
      )
      .innerJoin('rooms', 'room', 'room.id = detail.id_room')
      .where('room.id = :roomId', { roomId })
      .getMany();
  }
}
