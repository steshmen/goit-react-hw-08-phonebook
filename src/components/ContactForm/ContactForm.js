import { useState } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsThunk';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    const result = contacts.some(contact => contact.name === name);

    if (result) {
      alert(`${name} is already in contacts`);
      return;
    }

    const id = nanoid();
    dispatch(addContact({ id, name, number }));
    reset();
  };

  const handleChange = e => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.name_titel} htmlFor={nameId}>
        Name
      </label>
      <input
        type="text"
        className={css.name_input}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameId}
        value={name}
        onChange={handleChange}
      />

      <label className={css.name_titel} htmlFor={numberId}>
        Number
      </label>
      <input
        className={css.name_input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={numberId}
        value={number}
        onChange={handleChange}
      />

      <button className={css.form_btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
