import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Muhammed Hisham',
      email: 'abc@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Muhammed Hanan',
      email: 'abcd@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Hisham',
      email: 'abcdef@gmail.com',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'ADMIN' | 'ENGINEER' | 'INTERN') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (rolesArray.length === 0)
        throw new NotFoundException('User with this role not found');

      return rolesArray;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('User not Found');

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const deletedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return deletedUser;
  }
}
