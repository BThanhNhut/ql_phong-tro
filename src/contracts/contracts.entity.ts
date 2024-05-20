import { Accounts } from 'src/accounts/accounts.entity';
import { BaseDto } from 'src/common/base.dto';
import { Invoices } from 'src/invoices/invoices.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

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

  @OneToMany(() => Invoices, (invoice) => invoice.contracts)
  invoices: Invoices[];

  //
  @ManyToOne(() => Rooms, (room) => room.contracts)
  @JoinColumn({ name: 'id_rooms' })
  rooms: Rooms;

  @ManyToOne(() => Accounts, (account) => account.contracts)
  @JoinColumn({ name: 'id_accounts' })
  accounts: Accounts;
}
