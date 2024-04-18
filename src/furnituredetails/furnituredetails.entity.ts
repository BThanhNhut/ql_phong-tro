import { BaseDto } from 'src/common/base.dto';
import { Furniture } from 'src/furniture/furniture.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('furnituredetails')
export class Furnituredetails extends BaseDto {
  @ManyToOne(() => Rooms, (room) => room.furnituredetails)
  @JoinColumn({ name: 'id_room' })
  rooms: Rooms;
  @ManyToOne(() => Furniture, (furniture) => furniture.furnituredetails)
  @JoinColumn({ name: 'id_furniture' })
  furniture: Furniture;
}
