// import Modal from "@mui/material/Modal";

import React from "react";
import css from "./ContactModal.module.css";

const ContactModal = React.memo(
  ({ setIsOpen , handleClose, handleSubmit, name, email, phone }) => {
    return (
     <>
        <div className={css.modalContent}>
          <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={name}
            />
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={email}
            />
            <p>Number</p>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              defaultValue={phone}
            />
            <button type="submit">Confirm changes</button>
          </form>
        </div>
        </>
    );
  }
);

export default ContactModal;
