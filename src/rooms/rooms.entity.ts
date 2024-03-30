import { BaseDto } from "src/common/base.dto";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity({ name: 'rooms' })
export class Rooms extends BaseDto {
  @Column()
  name_room: string;
  @Column()
  address: string;
  @Column()
  room_price: number;
  @Column()
  deposit_price: number;
  @Column()
  image: string;
  @Column()
  area_width: number;
  @Column()
  area_height: number;
  @Column()
  phone_number: string;
  @Column()
  floor: number;
  @Column()
  number_of_people: number;
  @Column()
  note_gender: string;
  @Column()
  note: string;
  @Column()
  province: string;
  @Column()
  district: string;
  @Column()
  ward: string;
  @Column()
  id_type: number;
}