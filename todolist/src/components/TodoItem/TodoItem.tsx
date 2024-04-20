import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../Modal";
import EditTodoForm from "../Forms/EditForm";
import { ITodoListDto } from "../../types/todo-list";
import "./TodoItem.css";

interface TodoItemProps {
  todoItem: ITodoListDto;
}

const TodoItem: React.FC<TodoItemProps> = ({ todoItem }) => {
  const [modalEditOpen, setEditModalOpen] = useState<boolean>(false);
  const [modalShowOpen, setShowModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="Todo">
        <p>{todoItem.text} </p>
        <div>
          <FontAwesomeIcon
            className="eye-icon"
            icon={faEye}
            onClick={() => setShowModalOpen(true)}
          />
          <FontAwesomeIcon
            className="edit-icon"
            icon={faPenToSquare}
            onClick={() => setEditModalOpen(true)}
          />
        </div>
      </div>
      {modalEditOpen && (
        <Modal setOpenModal={setEditModalOpen}>
          <EditTodoForm todo={todoItem} setOpenModal={setEditModalOpen} />
        </Modal>
      )}
      {modalShowOpen && (
        <Modal setOpenModal={setShowModalOpen}>
          <p className="TodoId">Use TodoId to search Item</p>
          <p className="TodoId"> {todoItem.todoListId}</p>
        </Modal>
      )}
    </>
  );
};

export default TodoItem;
