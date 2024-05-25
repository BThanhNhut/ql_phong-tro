import { Controller, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rooms } from 'src/rooms/rooms.entity';
import { Services } from 'src/services/services.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceDetailsService {
  constructor(
    @InjectRepository(Rooms)
    private readonly roomrepo: Repository<Rooms>,
    @InjectRepository(Services)
    private readonly servicerepo: Repository<Services>,
  ) {}

  // async getAllServicebyIdRoom(id_room: number): Promise<any[]> {
  //   console.log('Vao dc cai nay');
  //   return this.ServicedetailsRepo.createQueryBuilder('servicedetails')
  //     .leftJoinAndSelect('servicedetails.rooms', 'rooms')
  //     .leftJoinAndSelect('servicedetails.services', 'services')
  //     .where('rooms.id = :id', { id: id_room })
  //     .getMany();
  // }

  async findServicesByRoomId(roomId: number): Promise<Services[]> {
    // Sử dụng INNER JOIN để kết hợp các bảng
    return await this.servicerepo
      .createQueryBuilder('service')
      .innerJoin('servicedetails', 'detail', 'detail.id_service = service.id')
      .innerJoin('rooms', 'room', 'room.id = detail.id_room')
      .where('room.id = :roomId', { roomId })
      .getMany();
  }
}
