import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

interface dtoCreate {
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: dtoCreate) {
    const value = await this.prismaService.user.create({
      data,
    });
    return value;
  }

  findAll() {
    return this.prismaService.user.findMany({
      include: {
        posts: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
      include: {
        posts: true,
      },
    });
  }

  update(id: number, updateUserDto: dtoCreate) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({ where: { id } });
  }
}
