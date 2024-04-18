import { BaseDto } from 'src/common/base.dto';
import { Servicedetails } from 'src/servicedetails/servicedetails.entity';
import { Column, Entity, OneToMany } from 'typeorm';

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

  @OneToMany(() => Servicedetails, (Servicedetail) => Servicedetail.services)
  Servicedetails: Servicedetails[];
}
