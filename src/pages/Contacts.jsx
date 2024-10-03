import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../pages/Contacts.module.css";
import { Helmet } from "react-helmet";


import ContactsList from "../components/ContactList/ContactsList";
import SimpleReactCalendar from "simple-react-calendar";

import { fetchContacts } from "../redux/contacts/operations";
import { selectIsLoading } from "../redux/selectors";
import Loader from "../components/Loader/Loader";

import Footer from "../components/Footer/Footer";

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <section>
        <div className={css.div_contact}>
          {isLoading && <Loader />}
          <ContactsList/>
        </div>
        {/* <div className={css.div_calendar}>
          <SimpleReactCalendar />
        </div> */}
        <Footer/>
      </section>
    </>
  );
}