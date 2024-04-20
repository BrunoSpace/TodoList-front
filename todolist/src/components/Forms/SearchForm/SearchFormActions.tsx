export const searchTodoItem = async (todoId: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${todoId}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating todo:", error);
    return [];
  }
};
