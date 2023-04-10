import { useState, useEffect } from 'react';
import css from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const users = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const LOCAL_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_KEY)) || users;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const addContact = contact => {
    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const changeFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const getFilterContact = () => {
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const filteredContatcs = getFilterContact();

  return (
    <div className={css.container}>
      <h1 className={css.phonebook_title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} contacts={contacts} />

      <h2 className={css.contacts_titel}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filteredContatcs} onDelete={deleteContact} />
    </div>
  );
};
