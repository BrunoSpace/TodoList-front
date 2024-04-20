import "./SearchForm.css";

import { useState } from "react";
import Modal from "../../Modal";
import TextLabel from "../../TextLabel";
import { isValidUUID } from "./SearchFormHelper";
import { searchTodoItem } from "./SearchFormActions";
import { ITodoListDto } from "../../../types/todo-list";

const SearchForm = () => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchedTodoItem, setSearchedTodoItem] = useState<ITodoListDto>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidUUID(value)) {
      setError("Invalid UUID format (Please use TodoId)");
      return;
    }

    searchTodoItem(value)
      .then((todoItem) => {
        setSearchedTodoItem(todoItem);
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error searching for todoItem:", error);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (inputValue === "" || isValidUUID(inputValue)) {
      setError("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="TodoForm">
        {error && <p style={{ color: "red", letterSpacing: "1px" }}>{error}</p>}
        <input
          type="text"
          className="todo-input"
          placeholder="Search TodoItem by uuid"
          value={value}
          onChange={handleInputChange}
        />
        <button type="submit" className="todo-btn">
          Search
        </button>
      </form>
      {showModal && searchedTodoItem && (
        <Modal setOpenModal={setShowModal}>
          <TextLabel todoItem={searchedTodoItem} />
        </Modal>
      )}
    </>
  );
};

export default SearchForm;
