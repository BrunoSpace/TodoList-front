import "./SortOrderDropdown.css";

const SortOrderDropdown = ({ value, onChange }: any) => {
  return (
    <div className="SortOrder custom-container">
      <label className="sort-label">
        Sort Order:
        <select
          className="sort-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </label>
    </div>
  );
};

export default SortOrderDropdown;
