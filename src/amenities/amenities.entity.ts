import { Amenitiesdetails } from 'src/amenitiesdetails/amenitiesdetails.entity';
import { BaseDto } from 'src/common/base.dto';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('amenities')
export class Amenities extends BaseDto {
  @Column()
  amenity_name: string;
  @Column()
  icon: string;
  @Column()
  status: boolean;

  @OneToMany(
    () => Amenitiesdetails,
    (amenitiesdetail) => amenitiesdetail.amenities,
  )
  amenitiesdetails: Amenitiesdetails[];
}
