import { FilterInput, FilterWrapper, Btn } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(changeFilter(value));
  };

  const clearFilterField = () => {
    dispatch(changeFilter(''));
  };

  return (
    <>
      <FilterWrapper>
        <label htmlFor="filter">
          <FilterInput
            type="text"
            id="filter"
            name="filter"
            value={filter}
            onChange={handleFilterChange}
          />
        </label>
        <Btn type="button" onClick={clearFilterField}>
          Clear
        </Btn>
      </FilterWrapper>
    </>
  );
};
