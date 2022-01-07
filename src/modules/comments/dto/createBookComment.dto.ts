import { IsString, MaxLength } from 'class-validator';

export class createBookCommentDto {
  @IsString()
  public readonly bookId: string;

  @IsString()
  @MaxLength(150)
  public readonly comment: string;
}
