import {Injectable } from "@nestjs/common";
import { Rooms } from "./rooms.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RoomServices {
  constructor(
    @InjectRepository(Rooms)
    private roomsRepo: Repository<Rooms>,
  ) {}

  async findAll(): Promise<Rooms[]> {
    return this.roomsRepo.find();
  }
}