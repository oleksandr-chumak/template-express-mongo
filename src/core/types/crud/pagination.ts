export interface Pagination {
  take: number;
  skip: number;
}
export type DataAndTotalCount<T> = {
  data: T;
} & {
  totalCount: number;
};

export interface SearchData<T>{
  pagination: Pagination,
  filter: Partial<T>,
  order: Partial<T>
}


