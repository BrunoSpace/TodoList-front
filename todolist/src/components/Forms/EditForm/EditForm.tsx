import "./EditForm.css";

import { useState } from "react";
import { ITodoListDto } from "../../../types/todo-list";
import { updateTodoItem } from "./EditFormActions";
import { useEditContext } from "../../../contexts/WrapperContext";

interface EditFormProps {
  todo: ITodoListDto;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditForm: React.FC<EditFormProps> = ({ todo, setOpenModal }) => {
  const { text, createdAt, updatedAt, done } = todo;

  const [todoData, setTodoData] = useState<Omit<ITodoListDto, "todoListId">>({
    text: text,
    done: done,
    createdAt: createdAt,
    updatedAt: updatedAt,
  });

  const { isEdited, setIsEdited } = useEditContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await updateTodoItem(todo.todoListId, todoData);

    setIsEdited(!isEdited);

    setOpenModal(false);
  };

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="text" className="form-label">
          Text:
          <input
            type="text"
            id="text"
            className="form-input"
            placeholder={text}
            value={todoData.text}
            onChange={(e) =>
              setTodoData({
                ...todoData,
                text: e.target.value,
              })
            }
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="createdAt" className="form-label">
          Created At:
          <input
            type="datetime-local"
            id="createdAt"
            className="form-input"
            value={todoData.createdAt}
            onChange={(e) =>
              setTodoData({
                ...todoData,
                createdAt: e.target.value,
              })
            }
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="updatedAt" className="form-label">
          Updated At:
          <input
            type="datetime-local"
            id="updatedAt"
            className="form-input"
            value={todoData.updatedAt}
            onChange={(e) =>
              setTodoData({
                ...todoData,
                updatedAt: e.target.value,
              })
            }
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="done" className="form-label">
          Done:
          <input
            type="checkbox"
            id="done"
            className="form-checkbox"
            checked={todoData.done}
            onChange={(e) =>
              setTodoData({
                ...todoData,
                done: e.target.checked,
              })
            }
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default EditForm;
