import { Amenities } from 'src/amenities/amenities.entity';
import { BaseDto } from 'src/common/base.dto';
import { Rooms } from 'src/rooms/rooms.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('amenitiesdetails')
export class Amenitiesdetails extends BaseDto {
  @ManyToOne(() => Rooms, (room) => room.amenitiesdetails)
  @JoinColumn({ name: 'id_room' })
  rooms: Rooms;

  @ManyToOne(() => Amenities, (amenities) => amenities.amenitiesdetails)
  @JoinColumn({ name: 'id_amenities' })
  amenities: Amenities;
}
