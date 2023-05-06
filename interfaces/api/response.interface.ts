export type ApiResponsePlural<K extends string, T> = {
  [key in K]: T;
} & {
  total: number;
  skip: number;
  limit: number;
}