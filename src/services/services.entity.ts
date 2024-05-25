import { BaseDto } from 'src/common/base.dto';
import { Rooms } from 'src/rooms/rooms.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('services')
export class Services extends BaseDto {
  @Column()
  service_name: string;
  @Column()
  cost: string;
  @Column({ nullable: true, default: null })
  note: string;
  @Column()
  icon: string;
  @Column()
  status: boolean;

  @ManyToOne(() => Rooms, (room) => room.services)
  @JoinColumn({ name: 'id_rooms' })
  rooms: Rooms;
}
