import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PrismaModule, UserModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
