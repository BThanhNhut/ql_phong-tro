import { Controller, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Furniture } from './furniture.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FurnitureService {
  constructor(
    @InjectRepository(Furniture)
    private readonly furnitureRepo: Repository<Furniture>,
  ) {}

  async findAllFurniture(): Promise<any> {
    return this.furnitureRepo.find();
  }

  async findServicesByRoomId(roomId: number): Promise<Furniture[]> {
    return await this.furnitureRepo
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
