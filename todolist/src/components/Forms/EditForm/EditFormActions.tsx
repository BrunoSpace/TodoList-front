import { ITodoListDto } from "../../../types/todo-list";

export const updateTodoItem = async (
  todoListId: string,
  todo: Omit<ITodoListDto, "todoListId">
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/${todoListId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: todo.text,
          updatedAt: new Date(todo.updatedAt),
          createdAt: new Date(todo.createdAt),
          done: todo.done,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error while updating TodoItem:" + error);
  }
};
