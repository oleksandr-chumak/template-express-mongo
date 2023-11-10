import { TransformFnParams } from 'class-transformer';
import { BadRequestException } from '../../../exception';
import { toNumberArray } from './to-number-array';
import { toNumber } from './to-number';

export function toNumberOrToNumberArray(value: unknown): number | number[]{

  if (Array.isArray(value)){
    return toNumberArray(value);
  }
  else if(typeof value === 'string'){
    return toNumber(value);
  }

  throw new BadRequestException();
}