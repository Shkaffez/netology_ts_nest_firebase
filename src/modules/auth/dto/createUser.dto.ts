import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class createUserDto {
  @IsString()
  @IsEmail()
  public readonly email: string;

  @IsString()
  @MinLength(6)
  public readonly password: string;

  @IsString()
  public readonly firstName: string;

  @IsString()
  @IsOptional()
  public readonly lastName: string;
}
