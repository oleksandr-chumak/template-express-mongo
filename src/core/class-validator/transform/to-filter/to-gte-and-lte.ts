// to greater then and to less than
import { ToGteAndLte } from '../../../types';

export function toGteAndLte(array:number[]): ToGteAndLte{
  if (array === undefined){
    return undefined;
  };
  return {$gte: array[0], $lte: array[1]};
}