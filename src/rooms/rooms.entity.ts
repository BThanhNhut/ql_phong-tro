import { Accounts } from 'src/accounts/accounts.entity';
import { Amenitiesdetails } from 'src/amenitiesdetails/amenitiesdetails.entity';
import { BaseDto } from 'src/common/base.dto';
import { Contracts } from 'src/contracts/contracts.entity';
import { Furnituredetails } from 'src/furnituredetails/furnituredetails.entity';
import { Images } from 'src/images/images.entity';
import { Posts } from 'src/posts/posts.entity';
import { Servicedetails } from 'src/servicedetails/servicedetails.entity';
import { Types } from 'src/types/types.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

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
  @ManyToOne(() => Types, (type) => type.rooms)
  @JoinColumn({ name: 'id_type' })
  types: Types;

  @ManyToOne(() => Accounts, (account) => account.rooms)
  @JoinColumn({ name: 'id_accounts' })
  accounts: Accounts;

  @OneToMany(() => Posts, (post) => post.rooms)
  posts: Posts[];

  @OneToMany(() => Images, (image) => image.rooms)
  images: Images[];

  @OneToMany(() => Contracts, (contract) => contract.rooms)
  contracts: Contracts[];

  @OneToMany(() => Servicedetails, (servicedetail) => servicedetail.rooms)
  Servicedetails: Servicedetails[];

  @OneToMany(() => Furnituredetails, (furnituredetail) => furnituredetail.rooms)
  furnituredetails: Furnituredetails[];

  @OneToMany(
    () => Amenitiesdetails,
    (amenitiesdetails) => amenitiesdetails.rooms,
  )
  amenitiesdetails: Amenitiesdetails[];
}
