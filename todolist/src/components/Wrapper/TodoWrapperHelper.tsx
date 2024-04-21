import { ITodoListDto, SortingType } from "../../types/todo-list";

export const sortTodoList = (
  updatedTodos: ITodoListDto[],
  sortOrder: SortingType
) => {
  return updatedTodos.sort((a, b) => {
    if (sortOrder === SortingType.ASC) {
      return a.text.toLowerCase() < b.text.toLowerCase() ? -1 : 1;
    } else {
      return a.text.toLowerCase() > b.text.toLowerCase() ? -1 : 1;
    }
  });
};

export const updateTodoItem = (
  setTodos: React.Dispatch<React.SetStateAction<ITodoListDto[]>>,
  todosList: ITodoListDto[],
  updatedValues: ITodoListDto,
  sortDirection: SortingType
) => {
  const newTodoList = todosList.map((todo: ITodoListDto) => {
    return todo.todoListId === updatedValues.todoListId
      ? { ...todo, ...updatedValues }
      : todo;
  });

  setTodos(sortTodoList(newTodoList, sortDirection));
};
