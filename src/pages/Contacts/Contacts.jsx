import React from 'react';
import ContactForm from '../../components/Phonebook/ContactForm';
import Filter from '../../components/Phonebook/Filter';
import ContactList from '../../components/Phonebook/ContactList';
import css from '../../components/Phonebook/Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import Loader from '../../components/Phonebook/Loader';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.phonebook__section}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && <h2>Залогінься</h2>}
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
}
