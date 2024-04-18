import { BaseDto } from 'src/common/base.dto';
import { Rooms } from 'src/rooms/rooms.entity';
import { Services } from 'src/services/services.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('servicedetails')
export class Servicedetails extends BaseDto {
  @ManyToOne(() => Rooms, (room) => room.Servicedetails)
  @JoinColumn({ name: 'id_room' })
  rooms: Rooms;

  @ManyToOne(() => Services, (service) => service.Servicedetails)
  @JoinColumn({ name: 'id_service' })
  services: Rooms;
}
