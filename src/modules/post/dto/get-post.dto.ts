import { IsMongoId, IsNotEmpty } from 'class-validator';

export class GetPostDto {
  @IsNotEmpty()
  @IsMongoId()
  public readonly id: string;
}
