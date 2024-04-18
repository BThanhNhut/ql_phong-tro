import { BaseDto } from 'src/common/base.dto';
import { Rooms } from 'src/rooms/rooms.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('images')
export class Images extends BaseDto {
  url: string;

  @ManyToOne(() => Rooms, (room) => room.image)
  @JoinColumn({ name: 'id_rooms' }) // Thêm dòng này để chỉ định tên trường khóa ngoại
  rooms: Rooms;
}
