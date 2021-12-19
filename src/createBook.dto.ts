import { IsBoolean, IsString, MaxLength } from 'class-validator';

export class createBookDto {
  @IsString()
  @MaxLength(30)
  public readonly title: string;

  @IsString()
  @MaxLength(150)
  public readonly description: string;

  @IsString()
  public readonly authors: string;

  @IsBoolean()
  public readonly favorite: boolean;

  @IsString()
  public readonly fileCover: string;

  @IsString()
  public readonly fileName: string;
}
