import { BaseDto } from 'src/common/base.dto';
import { Furnituredetails } from 'src/furnituredetails/furnituredetails.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('furniture')
export class Furniture extends BaseDto {
  @Column()
  furniture_name: string;
  @Column()
  icon: string;
  @Column()
  status: boolean;
  @OneToMany(
    () => Furnituredetails,
    (furnituredetail) => furnituredetail.furniture,
  )
  furnituredetails: Furnituredetails[];
}
