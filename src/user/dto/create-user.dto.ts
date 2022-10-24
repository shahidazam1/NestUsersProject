import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  email: String;
  name: String;
}
