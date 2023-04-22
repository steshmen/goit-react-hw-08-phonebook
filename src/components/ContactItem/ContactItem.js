import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css'
import { deleteContactAction } from 'redux/slice';

export const ContactItem = ({ name, id, number }) => {
    const dispatch = useDispatch();
    
    return (
         <li className={css.list_item}>
            <p className={css.list_title}>{name}: {number}</p>
            <button
                className={css.list_btn}
                type="button"
                onClick={() => dispatch(deleteContactAction(id))}
            >
                Delete
            </button>
        </li>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}