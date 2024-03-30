import { Controller, Get } from "@nestjs/common";
import { RoomServices } from "./rooms.service";
import { Rooms } from "./rooms.entity";

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomservice: RoomServices) {}

  @Get('abc')
  a(){
    return "vao dc"
  }

  @Get()
  findAll(): Promise<Rooms[]> {
    console.log(this.roomservice.findAll())
    return this.roomservice.findAll();
  }
}