import "./TextLabel.css";

import { ITodoListDto } from "../../types/todo-list";

interface TextLabelProps {
  todoItem: ITodoListDto;
}

const TextLabel: React.FC<TextLabelProps> = ({ todoItem }) => {
  const { text, done, createdAt, updatedAt } = todoItem;

  return (
    <>
      <div className="display-list">
        <p className="label">
          Task: <span className="value">{text}</span>
        </p>
      </div>
      <div className="display-list">
        <p className="label">
          CreatedAt: <span className="value">{createdAt}</span>
        </p>
      </div>
      <div className="display-list">
        <p className="label">
          UpdatedAt: <span className="value">{updatedAt}</span>
        </p>
      </div>
      <div className="display-list">
        <p className="label">
          Done:{" "}
          <span className="value">{done === false ? "false" : "true"}</span>
        </p>
      </div>
    </>
  );
};

export default TextLabel;
