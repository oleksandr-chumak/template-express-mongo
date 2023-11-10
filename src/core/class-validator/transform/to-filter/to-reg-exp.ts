import { ToRegExp } from '../../../types';

export function toRegExp(value: string | string[]): ToRegExp {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    const regexp: RegExp[] = value.map((el: string) => new RegExp(el));
    return { $in: regexp };
  }
  return { $in: [new RegExp(value)] };
}
