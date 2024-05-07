import { Accounts } from 'src/accounts/accounts.entity';
import { BaseDto } from 'src/common/base.dto';
import { Favorites } from 'src/favorites/favorites.entity';
import { Posttype } from 'src/posttype/posttype.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('posts')
export class Posts extends BaseDto {
  @Column()
  title: string;

  @Column()
  create_at: Date;

  @Column()
  status: boolean;

  @ManyToOne(() => Posttype, (posttype) => posttype.posts)
  @JoinColumn({ name: 'id_posttype' })
  posttype: Posttype;

  @ManyToOne(() => Rooms, (room) => room.posts)
  @JoinColumn({ name: 'id_rooms' })
  rooms: Rooms;

  @ManyToOne(() => Accounts, (account) => account.posts)
  @JoinColumn({ name: 'id_accounts' })
  accounts: Accounts;

  @OneToMany(() => Favorites, (favorite) => favorite.posts)
  favorite: Favorites[];
}
