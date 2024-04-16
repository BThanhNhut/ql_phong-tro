import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseDto } from '../common/base.dto';
import { Roles } from '../roles/roles.entity';

@Entity({ name: 'accounts' })
export class Accounts extends BaseDto {
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  customer_name: string;

  @Column()
  phone_number: string;

  @Column()
  address: string;

  @ManyToOne(() => Roles, (role) => role.accounts)
  @JoinColumn({ name: 'id_roles' }) // Thêm dòng này để chỉ định tên trường khóa ngoại
  roles: Roles;
}
