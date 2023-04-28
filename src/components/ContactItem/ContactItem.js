import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css';
import { deleteContact } from 'redux/contactsThunk';

export const ContactItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.list_item}>
      <p className={css.list_title}>
        {name}: {phone}
      </p>
      <button
        className={css.list_btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
