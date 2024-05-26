import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Services } from './services.entity';
import { Repository } from 'typeorm';
import { Rooms } from 'src/rooms/rooms.entity';
import { CreateServiceDto } from './dto/CreateServiceDto';

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
  async addServices(
    id_room: number,
    serviceList: CreateServiceDto[],
  ): Promise<Services[]> {
    const services = serviceList.map((serviceDto) => {
      const service = new Services();
      service.service_name = serviceDto.service_name;
      service.cost = serviceDto.cost;
      service.note = serviceDto.note;
      service.icon = serviceDto.icon;
      service.status = serviceDto.status;
      service.rooms = { id: id_room } as any;
      return service;
    });
    return await this.servicesrepo.save(services);
  }
}
