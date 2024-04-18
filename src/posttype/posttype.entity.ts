import { BaseDto } from 'src/common/base.dto';
import { Posts } from 'src/posts/posts.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('posttype')
export class Posttype extends BaseDto {
  @Column()
  type_name: string;
  @Column()
  status: boolean;

  @OneToMany(() => Posts, (posts) => posts.posttype)
  posts: Posts[];
}
