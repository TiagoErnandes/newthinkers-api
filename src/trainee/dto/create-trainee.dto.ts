import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail(undefined, { message: 'O email deve ter um formato valido' })
  email: string;

  @IsString()
  projects: string;
}
