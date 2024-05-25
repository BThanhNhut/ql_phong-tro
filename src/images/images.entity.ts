import { BaseDto } from 'src/common/base.dto';
import { Rooms } from 'src/rooms/rooms.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('images')
export class Images extends BaseDto {
  @Column()
  url: string;

  @ManyToOne(() => Rooms, (room) => room.image)
  @JoinColumn({ name: 'id_rooms' })
  rooms: Rooms;
}
