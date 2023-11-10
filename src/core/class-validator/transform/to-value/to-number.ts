import { BadRequestException } from '../../../exception';

export function toNumber(value: unknown): number{

  const numericValue: number = Number(value);

  if (isNaN(numericValue)){
    throw new BadRequestException(`${value} must be a number`);
  }

  return numericValue;
}