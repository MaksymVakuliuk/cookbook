export interface Page<T> {
  content: T[];
  pageSize: number;
  pageNumber: number;
  totalPages: number;
  totalElements: number;
}
