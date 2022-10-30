import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

interface dtoPost {
  title?: string;
  content?: string;
  published?: boolean;
  authorId: string;
}

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}
  async create(data) {
    return await this.prismaService.post.create({
      data,
    });
  }

  findAll() {
    return this.prismaService.post.findMany();
  }

  findOne(id: number) {
    return this.prismaService.post.findUnique({ where: { id } });
  }

  update(id: number, updatePostDto) {
    return this.prismaService.post.update({
      data: updatePostDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prismaService.post.delete({ where: { id } });
  }
}
