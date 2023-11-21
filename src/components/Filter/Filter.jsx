import CSS from './index.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={CSS.filterContainer}>
      <label htmlFor="inputFilter" className={CSS.formLabel}>
        Find contacts by name
      </label>
      <input
        name="filter"
        type="text"
        className={CSS.input}
        id="inputFilter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
