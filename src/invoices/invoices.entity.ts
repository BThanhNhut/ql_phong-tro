import { Accounts } from 'src/accounts/accounts.entity';
import { BaseDto } from 'src/common/base.dto';
import { Contracts } from 'src/contracts/contracts.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('invoices')
export class Invoices extends BaseDto {
  @Column()
  monthly_bill: number;
  @Column()
  service_charge: number;
  @Column()
  service_note: string;
  @Column()
  discount: number;
  @Column()
  discount_note: string;
  @Column()
  note: string;
  @Column()
  status: boolean;

  @ManyToOne(() => Contracts, (contract) => contract.invoices)
  @JoinColumn({ name: 'id_contracts' })
  contracts: Contracts;

  @ManyToOne(() => Accounts, (account) => account.invoices)
  @JoinColumn({ name: 'id_accounts' })
  accounts: Accounts;
}
