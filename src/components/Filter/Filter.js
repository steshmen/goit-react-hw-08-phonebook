import { useDispatch, useSelector } from 'react-redux';

import { getFilterAction } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
import { TextField } from '@mui/material';
import { FilterBox } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(getFilterAction(e.target.value));
  };
  return (
    <FilterBox>
      <TextField
        value={filter}
        name="filter"
        onChange={handleChangeFilter}
        size="small"
        label="Find contacts by name"
        style={{ width: '100%' }}
      />
    </FilterBox>
  );
};
