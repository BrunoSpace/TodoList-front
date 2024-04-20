export const getAllTodos = async (sortOrder: string) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}?sortDirection=${sortOrder}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export const addTodo = async (text: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating todo:", error);
    return [];
  }
};
