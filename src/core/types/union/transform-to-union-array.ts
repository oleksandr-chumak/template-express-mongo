export type TransformToUnionArray<T> = {
  [K in keyof T]: T[K] | T[K][];
};