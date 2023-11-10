import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
  @IsNotEmpty()
  @IsMongoId()
  public readonly id: string;

  @IsOptional()
  @IsString()
  public readonly title: string;

  @IsOptional()
  @IsString()
  public readonly content: string;

  @IsOptional()
  @IsString()
  public readonly author: string;
}
