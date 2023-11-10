export enum SortDirection{
  ASC='asc',
  DESC='desc'
}
export enum ORDER_DIRECTION_MONGO{
  ASC=1,
  DESC=-1
}
export type Order<T> = Partial<{
  [K in keyof T as `${Extract<K, string>}_order`]: SortDirection;
}>;