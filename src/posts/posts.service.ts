import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

interface dtoPost {
  title?: String;
  content?: String;
  published?: Boolean;
  authorId: string;
}

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}
  async create(data: dtoPost) {
    return await this.prismaService.post.create({
      data: {
        title: 'post 1',
        authorId: 1,
      },
    });
  }

  findAll() {
    return this.prismaService.post.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
