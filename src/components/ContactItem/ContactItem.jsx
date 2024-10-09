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
      <ul className={css.list}>
        <li className={css.name}>{name}</li>
        <li className={css.phone}>Phone: {phone}</li>
        <li className={css.email}>E-mail: {email}</li>
        <span
          className={`${css.favorites} ${favorite ? css.isTrue : css.isFalse}`}
        ></span>
        <input
          className={css.checked}
          type="checkbox"
          checked={favorite}
          onChange={(e) => onChangeFavorite(e.target.checked)}
        />
        <NavLink className={css.link} to={`/contacts/${_id}`}>
          Details
        </NavLink>
        <button type="edit" onClick={onEdit}>
          Edit
        </button>
        <button onClick={onDelete}>
          <span>Delete</span>
        </button>
      </ul>
    );
  }
);

export default ContactItem;
