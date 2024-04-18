import { Post } from '@nestjs/common';
import { Accounts } from 'src/accounts/accounts.entity';
import { BaseDto } from 'src/common/base.dto';
import { Posts } from 'src/posts/posts.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('favorites')
export class Favorites extends BaseDto {
  @ManyToOne(() => Accounts, (account) => account.favorite)
  @JoinColumn({ name: 'id_accounts' })
  accounts: Accounts;

  @ManyToOne(() => Posts, (post) => post.favorite)
  @JoinColumn({ name: 'id_post' })
  posts: Posts;
}
