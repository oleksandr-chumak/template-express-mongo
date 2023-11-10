import { ToInOrToEqual } from '../../../types';

export function toInOrToEqual(value?: string | string[]): ToInOrToEqual{
  if(value === undefined || value === null){
    return undefined;
  }
  if(Array.isArray(value)){
    return {$in: value};
  }
  return {$eq: value};
}