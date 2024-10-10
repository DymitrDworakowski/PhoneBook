import React from "react";
import css from "./ContactItem.module.css";
import { NavLink } from "react-router-dom";

const ContactItem = React.memo(
  ({
    name,
    email,
    phone,
    favorite,
    onEdit,
    onDelete,
    onChangeFavorite,
    _id,
  }) => {
    return (
      <div className={css.list}>
        <ul className={css.ul_contact}>
          <li>{name}</li>
          <li>Phone: {phone}</li>
          <li>E-mail: {email}</li>
        </ul>
        <div className={css.fav}>
        <span
          className={`${css.favorites} ${favorite ? css.isTrue : css.isFalse}`}
        ></span></div>
        <div className={css.checkbox}>
        <input
          className={css.checked}
          type="checkbox"
          checked={favorite}
          onChange={(e) => onChangeFavorite(e.target.checked)}
        />
        </div>
        <NavLink className={css.link} to={`/contacts/${_id}`}>
          Details
        </NavLink>
        <button type="edit" onClick={onEdit} className={css.button_edit}>
          Edit
        </button>
        <button onClick={onDelete} className={css.button_delete}>
          <span>Delete</span>
        </button>
      </div>
    );
  }
);

export default ContactItem;
