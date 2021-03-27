import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateAccountInput } from './dtos/create-account.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<string | undefined> {
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        // make error
        return '사용자가 이미 존재';
      }
      // create and save;
      await this.users.save(this.users.create({ email, password, role }));
    } catch (e) {
      console.log(e);
      // make error
      return '사용자를 만들 수 없습니다.';
    }
  }
}
