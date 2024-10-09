import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { findContact } from "../../redux/contacts/filterSlice";
// import { selectFilterContacts } from "../../redux/selectors";
// import { useState } from "react";

const Filter = ({ handleChange, sortBy }) => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    e.preventDefault();
    const value = e.target.value; // Отримуємо значення поля введення безпосередньо з події

    dispatch(findContact(value));
  };

  return (
    <div className={css.div_filter}>
      <p className={css.p_filter}>Filters</p>
      <input
        type="text"
        name="search"
        placeholder="Search by name"
        onChange={handleFilter}
      />
      <select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortBy}
        onChange={handleChange}
      >
        <option value="none">...</option>
        <option value="byAB">Sort name by A-B</option>
        <option value="byBA">Sort name B-A</option>
        <option value="byFavorite">Sort favorite</option>
      </select>
    </div>
  );
};

export default Filter;
