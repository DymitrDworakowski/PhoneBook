import css from "./ContactsList.module.css";

import Filter from "../Filter/Filter";
import ContactItem from "../ContactItem/ContactItem";
import { selectIsLoading } from "../../redux/selectors";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, statusFavorite } from "../../redux/contacts/operations";
import { selectFilterContacts } from "../../redux/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactModal from "../ContactModal/ContactModal";

const ContactsList = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");
  const [editingContact, setEditingContact] = useState(null); // Тепер це об'єкт з контактами для редагування
  const contacts = useSelector(selectFilterContacts);
  const isLoading = useSelector(selectIsLoading);
  const [isOpen, setIsOpen] = useState(false);

  // Логіка для зміни статусу улюбленого контакту
  const handleChangeFavorite = async (id, favorite) => {
    await dispatch(statusFavorite({ favorite, id }));

    // Оновлюємо контакти після зміни статусу
    await dispatch(fetchContacts());
  };

  // Логіка відкриття модалки
  const handleOpenModal = (contact = null) => {
    setEditingContact(contact); // Якщо contact передано, значить редагуємо, інакше - додаємо
    setIsOpen(true);
  };

  // Логіка закриття модалки
  const handleCloseModal = () => {
    setEditingContact(null);
    setIsOpen(false);
  };
  // Логіка сортування контактів
  const sortContacts = (contacts) => {
    if (sortBy === "byAB") {
      return [...contacts].sort((a, b) => a.name.localeCompare(b.name)); // Сортування A-B
    } else if (sortBy === "byBA") {
      return [...contacts].sort((a, b) => b.name.localeCompare(a.name)); // Сортування B-A
    } else if (sortBy === "byFavorite") {
      return [...contacts].sort((a, b) => b.favorite - a.favorite); // Сортування за порядком 1-2 (за id)
    } else {
      return contacts; // Повернення незміненого масиву контактів, якщо сортування не вибрано
    }
  };

  const sortedContacts = sortContacts(contacts);
  // Логіка сортування контакту
  const handleChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
  };

  // Логіка видалення контакту
  const handleDelete = async (id) => {
    await dispatch(deleteContact(id));
    dispatch(fetchContacts()); // автоматичне оновлення без таймауту
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); // Завантажує контакти при першому рендері

  return (
    <div className={css.div_list}>
      <div className={css.div_search}>
        <button onClick={() => handleOpenModal()}>Add Contact</button>
        <Filter sortBy={sortBy} handleChange={handleChange} />
      </div>
      <div className={css.div_list_contact}>
        {sortedContacts.map((contacts) => (
          <ContactItem
            key={contacts._id}
            {...contacts} // Передаємо всі пропси контакту напряму
            onEdit={() => handleOpenModal(contacts)} // Відкриваємо модалку для редагування
            onDelete={() => handleDelete(contacts._id)}
            onChangeFavorite={(checked) =>
              handleChangeFavorite(contacts._id, checked)
            }
          />
        ))}
      </div>
      {isOpen && (
        <ContactModal contact={editingContact} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ContactsList;
