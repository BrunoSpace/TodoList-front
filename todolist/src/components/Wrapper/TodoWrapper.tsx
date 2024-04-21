import "./TodoWrapper.css";

import { useEffect, useState } from "react";
import { ITodoListDto, SortingType } from "../../types/todo-list";
import { sortTodoList, updateTodoItem } from "./TodoWrapperHelper";
import { addTodo, getAllTodos } from "./TodoWrapperActions";
import { useWrapperContext } from "../../contexts/WrapperContext";

import SortOrderDropdown from "../Sort/SortOrderDropdown";
import InputForm from "../Forms/InputForm/InputForm";
import TodoItem from "../TodoItem";
import SearchForm from "../Forms/SearchForm";

function TodoWrapper() {
  const [todosList, setTodos] = useState<ITodoListDto[]>([]);
  const [sortOrder, setSortOrder] = useState<SortingType>(SortingType.DESC);
  const { updatedTodoItem } = useWrapperContext();

  useEffect(() => {
    getAllTodos(sortOrder).then((data) => {
      setTodos(data);
    });
  }, [sortOrder]);

  useEffect(() => {
    // update only item in list after item is updated in edit form!
    if (updatedTodoItem.todoListId !== "") {
      updateTodoItem(setTodos, todosList, updatedTodoItem, sortOrder);
    }
  }, [updatedTodoItem]);

  const createTodo = async (text: string) => {
    const newTodo = await addTodo(text);

    const updatedTodos = [...todosList, newTodo];

    sortTodoList(updatedTodos, sortOrder);

    setTodos(updatedTodos);
  };

  return (
    <div className="TodoWrapper">
      <h1>Create new Todo task !</h1>
      <SortOrderDropdown value={sortOrder} onChange={setSortOrder} />
      <InputForm createTodo={createTodo} />
      <SearchForm />
      {todosList.map((todo, index) => (
        <TodoItem key={index} todoItem={todo} />
      ))}
    </div>
  );
}

export default TodoWrapper;
