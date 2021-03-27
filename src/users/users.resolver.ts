import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import {
  CreateAccountOutput,
  CreateAccountInput,
} from './dtos/create-account.dto';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}
  @Query((returns) => String)
  hi() {
    return 'hello user resolver';
  }

  // @Mutation((returns) => CreateAccountOutput)
  // createAccount(@Args('input') createAccountInput: CreateAccountInput) {}
}
