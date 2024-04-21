import React, { createContext, useContext, useState } from "react";
import { ITodoListDto } from "../types/todo-list";

interface WrapperContextType {
  updatedTodoItem: ITodoListDto;
  setUpdatedTodoItem: React.Dispatch<React.SetStateAction<ITodoListDto>>;
}

const WrapperContext = createContext<WrapperContextType>({
  updatedTodoItem: {
    todoListId: "",
    text: "",
    done: false,
    createdAt: "",
    updatedAt: "",
  },
  setUpdatedTodoItem: () => {},
});

export const useWrapperContext = (): WrapperContextType =>
  useContext(WrapperContext);

export const EditProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [updatedTodoItem, setUpdatedTodoItem] = useState<ITodoListDto>({
    todoListId: "",
    text: "",
    done: false,
    createdAt: "",
    updatedAt: "",
  });

  return (
    <WrapperContext.Provider value={{ updatedTodoItem, setUpdatedTodoItem }}>
      {children}
    </WrapperContext.Provider>
  );
};
