/* eslint-disable */
// @ts-nocheck
import { Pagination, SearchData } from '../../types';

export function clearEmptyPropertiesForPagination<T extends object,Model>(obj: T, dto: T): SearchData<Model> {
  const pagination: Pagination = {take: 0, skip: 0};
  const filter: Partial<Model> = {};
  const order: Partial<Model> = {};

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    const value: T[Extract<keyof T, string>] = obj[key];

    if (value === null || value === undefined || !dto.hasOwnProperty(key)) {
      continue;
    }

    if (key.includes('_order')) {
      const keyWithoutOrder: string = key.slice(0, key.length - 6);
      order[keyWithoutOrder] = value;
    } else if (['take', 'skip'].includes(key)) {
      pagination[key] = value as number;
    } else {
      filter[key] = value;
    }
  }

  return { pagination, filter, order };
}
