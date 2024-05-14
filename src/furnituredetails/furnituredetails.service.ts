import { Controller, Injectable } from '@nestjs/common';
import { Furnituredetails } from './furnituredetails.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rooms } from 'src/rooms/rooms.entity';
import { Furniture } from 'src/furniture/furniture.entity';
import { CreateFurnituredetails } from './dto/CreateFurnituredetails.dto';

@Injectable()
export class FurnituredetailsService {
  constructor(
    @InjectRepository(Furnituredetails)
    private furnituredetailsRepo: Repository<Furnituredetails>,
    @InjectRepository(Rooms)
    private readonly roomsRepo: Repository<Rooms>,
    @InjectRepository(Furniture)
    private readonly furnitureRepo: Repository<Furniture>,
  ) {}

  async createFurnituredetailsService(
    createdetail: CreateFurnituredetails[],
  ): Promise<any[]> {
    const furnituredetailsArray: Furnituredetails[] = [];
    for (const dto of createdetail) {
      const { id_room, id_furniture } = dto;

      const room = await this.roomsRepo.findOne({ where: { id: id_room } });
      const furniture = await this.furnitureRepo.findOne({
        where: { id: id_furniture },
      });

      if (!room || !furniture) {
        throw new Error(
          `Room or Amenities not found for id_room: ${id_room}, id_amenities: ${id_furniture}`,
        );
      }

      const furnituredetails = new Furnituredetails();
      furnituredetails.rooms = room;
      furnituredetails.furniture = furniture;
      furnituredetailsArray.push(furnituredetails);
    }
    return await this.furnituredetailsRepo.save(furnituredetailsArray);
  }
}
