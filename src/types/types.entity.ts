import { BaseDto } from 'src/common/base.dto';
import { Rooms } from 'src/rooms/rooms.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'types' })
export class Types extends BaseDto {
  @Column()
  type_name: string;
  @Column()
  status: boolean;
  @OneToMany(() => Rooms, (room) => room.types)
  rooms: Rooms[];
}
