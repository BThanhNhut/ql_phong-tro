import { BaseDto } from 'src/common/base.dto';
import { Column, Entity } from 'typeorm';

Entity('invoices');
export class Invoices extends BaseDto {
  @Column()
  monthly_bill: string;
  @Column()
  service_charge: number;
  @Column()
  service_note: string;
  @Column()
  incurred: number;
  @Column()
  incurred_note: number;
  @Column()
  note: string;
}
