import { ORDER_DIRECTION_MONGO } from '../../crud';

export type ToGteAndLte = { $gte: number; $lte: number } | undefined;

export type ToInOrToEqual = { $in: string[] } | { $eq: string } | undefined;

export type ToOrder = ORDER_DIRECTION_MONGO | undefined;

export type ToRegExp = { $in: RegExp[] } | undefined;
