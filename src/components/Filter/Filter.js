import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';
import { getFilterAction } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(getFilterAction(e.target.value));
  };
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
  );
};
