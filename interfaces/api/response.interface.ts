export interface ApiResponsePlural<T> {
  data: T;
  total: number;
  skip: number;
  limit: number;
}