import { BaseDto } from 'src/common/base.dto';
import { Entity, Column, Unique, OneToMany } from 'typeorm';
import { Accounts } from 'src/accounts/accounts.entity';

@Entity({ name: 'roles' })
export class Roles extends BaseDto {
  @Column({ unique: true, nullable: false }) // khong the null
  codes: string;

  @Column({ nullable: true })
  roles_name: string;

  @OneToMany(() => Accounts, (account) => account.roles)
  accounts: Accounts[];
}
