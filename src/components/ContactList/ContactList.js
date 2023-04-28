import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsThunk';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && (
        <p style={{ color: 'red', margin: 10 }}>The server is not responding</p>
      )}
      {filteredContacts.length > 0 && (
        <ul>
          {filteredContacts.map(({ name, id, phone }) => (
            <ContactItem key={id} name={name} id={id} phone={phone} />
          ))}
        </ul>
      )}
    </>
  );
};
