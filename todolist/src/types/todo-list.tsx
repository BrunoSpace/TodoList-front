export interface ITodoListDto {
  todoListId: string;
  text: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum SortingType {
  ASC = "ASC",
  DESC = "DESC",
}
