import { BaseDto } from 'src/common/base.dto';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'contracts' })
export class Contracts extends BaseDto {
  @Column()
  tenant_name: string;
  @Column()
  phone: string;
  @Column()
  email: string;
  @Column()
  idcode: string;
  @Column()
  card_front: string;
  @Column()
  back_of_card: string;
  @Column()
  start_date: Date;
  @Column()
  end_date: Date;
  @Column()
  startpay_money: Date;
  @Column()
  payment_period: number;
  @Column()
  note: string;
  @Column()
  status: boolean;
}
