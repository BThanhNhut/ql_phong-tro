import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseDto } from '../common/base.dto';
import { Roles } from '../roles/roles.entity';
import { Posts } from 'src/posts/posts.entity';
import { Favorites } from 'src/favorites/favorites.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Contracts } from 'src/contracts/contracts.entity';
import { Invoices } from 'src/invoices/invoices.entity';

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

  @Column({ nullable: true })
  avatar: string;

  @ManyToOne(() => Roles, (role) => role.accounts)
  @JoinColumn({ name: 'id_roles' }) // Thêm dòng này để chỉ định tên trường khóa ngoại
  roles: Roles;

  @OneToMany(() => Posts, (post) => post.accounts)
  posts: Posts[];

  @OneToMany(() => Favorites, (favorite) => favorite.accounts)
  favorite: Favorites[];

  @OneToMany(() => Rooms, (room) => room.accounts)
  rooms: Rooms[];

  @OneToMany(() => Contracts, (contract) => contract.accounts)
  contracts: Contracts[];

  @OneToMany(() => Invoices, (invoice) => invoice.accounts)
  invoices: Invoices[];
}
