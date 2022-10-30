import { ConflictException, Injectable, HttpException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async signup(user: any) {
    const userExist = await this.prismaService.signUp.findUnique({
      where: { email: user.email },
    });

    if (userExist) {
      throw new ConflictException();
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const value = await this.prismaService.signUp.create({
      data: {
        email: user.email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
      },
      process.env.SECRET_KEY_JWT,
    );

    return token;
  }

  async signin(data) {
    const user = await this.prismaService.signUp.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new HttpException('Invalid Credintials', 400);
    }

    const hashedPassword = user.password;

    const isValidPassword = await bcrypt.compare(data.password, hashedPassword);

    if (!isValidPassword) {
      throw new HttpException('Invalid Credintials', 400);
    }

    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
      },
      process.env.SECRET_KEY_JWT,
    );

    return token;
  }
}
