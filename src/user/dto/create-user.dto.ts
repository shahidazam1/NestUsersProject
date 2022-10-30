import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  email: String;

  @IsNotEmpty()
  @IsString()
  name: String;
}
