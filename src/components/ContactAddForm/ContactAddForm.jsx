import css from "./ContactAddForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactAddForm = ({ setIsOpen }) => {
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value; // Отримуємо значення number з форми
    const email = form.elements.email.value;

    await dispatch(addContact({ name, phone, email })); // Передаємо об'єкт зі значеннями name та number до екшена
    setIsOpen(false);
    form.reset();
  };

  const handleModalClick = (e) => {
    // Закриття модалки тільки якщо клік поза формою
    e.stopPropagation(); // Запобігає поширенню події кліку всередині форми
  };

  return (
    <>
      <div className={css.div_form} onClick={() => setIsOpen(false)}>
        <form className={css.form} onClick={handleModalClick} onSubmit={handleSubmit}>
          <p>Name</p>
          <input
            className={css.input}
            type="text"
            name="name"
            required
            placeholder="Name"
          />
          <p>Email</p>
          <input
            className={css.input}
            type="email"
            name="email"
            required
            placeholder="Email"
          />
          <p>Number</p>
          <input
            className={css.input}
            type="tel"
            name="phone"
            required
            placeholder="Phone"
          />
          <button type="submit" className={css.form_button}>
            Add contact
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactAddForm;
