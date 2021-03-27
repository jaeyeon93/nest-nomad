import { Entity, Column } from 'typeorm';
import { CoreEntity } from '../../common/entities/core.entity';
import { ObjectType, Field, InputType } from '@nestjs/graphql';

type UserRole = 'client' | 'owner' | 'delivery';

@InputType({ isAbstract: true })
@Entity()
@ObjectType()
export class User extends CoreEntity {
  @Column()
  @Field((type) => String)
  email: string;

  @Column()
  @Field((type) => String)
  password: string;

  @Column((type) => String)
  @Field((type) => String)
  role: UserRole;
}
