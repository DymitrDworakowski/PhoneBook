// import Modal from "@mui/material/Modal";

import React from "react";
import css from "./ContactModal.module.css";

// const ContactModal = React.memo(
//   ({ handleCloseModal, handleSubmit, name, email, phone }) => {
//     return (
//       <>
//         <div className={css.modalContent}>
//           <form onSubmit={handleSubmit} >
//             <p>Name</p>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               defaultValue={name}
//             />
//             <p>Email</p>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               defaultValue={email}
//             />
//             <p>Number</p>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone"
//               defaultValue={phone}
//             />
//             <button type="submit" onClick={handleCloseModal}>Confirm changes</button>
//           </form>
//         </div>
//       </>
//     );
//   }
// );

// export default ContactModal;
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../redux/contacts/operations";
import { useState } from "react";
const ContactModal = ({ contact, handleClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact ? contact.name : "");
  const [phone, setPhone] = useState(contact ? contact.phone : "");
  const [email, setEmail] = useState(contact ? contact.email : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contact) {
      // Якщо контакт передано, редагуємо
      await dispatch(editContact({ id: contact._id, name, phone, email }));
    } else {
      // Інакше додаємо новий контакт
      await dispatch(addContact({ name, phone, email }));
    }
    handleClose();
  };


  return (
    <div>
      <h2>{contact ? "Edit Contact" : "Add Contact"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          required
        />
        <button type="submit">{contact ? "Update" : "Add"}</button>
      </form>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};
export default ContactModal;
