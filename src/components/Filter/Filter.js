import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';
import { contactsFilterAction } from 'redux/slice';

export const Filter = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handleChangeFilter = e => {
        dispatch(contactsFilterAction(e.target.value));
    }
    return (
        <>
            <p className={css.titel}>Find contacts by name</p>
            <input
                className={css.input}
                value={filter}
                name="filter"
                onChange={handleChangeFilter}
            />
        </>
    )
}
