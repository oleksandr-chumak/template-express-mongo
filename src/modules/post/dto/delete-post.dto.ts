import { IsMongoId, IsNotEmpty } from 'class-validator';

export class DeletePostDto{
  @IsNotEmpty()
  @IsMongoId()
  public readonly id: string;
}