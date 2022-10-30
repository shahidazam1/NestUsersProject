import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  city: String;

  @IsString()
  @IsNotEmpty()
  district: String;

  @IsString()
  @IsNotEmpty()
  street: String;
}
