import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

interface addressDto {
  city: any;
  district: any;
  street: any;
}

@Injectable()
export class AddressService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data) {
    return this.prismaService.address.create({
      data,
    });
  }

  findAll() {
    return this.prismaService.address.findMany();
  }

  findOne(id: number) {
    return this.prismaService.address.findUnique({ where: { id } });
  }

  update(id: number, updateAddressDto) {
    return this.prismaService.address.update({
      where: { id },
      data: updateAddressDto,
    });
  }

  remove(id: number) {
    return this.prismaService.address.delete({ where: { id } });
  }
}
