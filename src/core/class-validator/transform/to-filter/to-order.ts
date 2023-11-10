import { ORDER_DIRECTION_MONGO, SortDirection, ToOrder } from '../../../types';

export function toOrder(direction: SortDirection): ToOrder {
  if (direction === undefined || direction === null) {
    return undefined;
  }
  return direction === SortDirection.ASC
    ? ORDER_DIRECTION_MONGO.ASC
    : ORDER_DIRECTION_MONGO.DESC;
}
