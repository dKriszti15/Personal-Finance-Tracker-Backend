import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(firstname: string, lastname: string, username: string, password: string): Promise<User> {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = this.usersRepository.create({ firstname, lastname, username, password_hash: hashedPassword });
    return this.usersRepository.save(user);
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async getAllUsers(): Promise<User[]> {
  return this.usersRepository.find();
}

}
