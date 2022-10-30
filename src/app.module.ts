import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { AddressModule } from './address/address.module';
import { SignModule } from './sign/sign.module';

@Module({
  imports: [PrismaModule, UserModule, PostsModule, AddressModule, SignModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
