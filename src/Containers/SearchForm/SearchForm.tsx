import './SearchForm.scss';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addSearchFilter, removeSearchFilter, removeAllFilters } from 'redux_utils/actions';

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>('');

  const submitSearch = (e: FormEvent<HTMLElement>): void => {
    e.preventDefault();
    if (query !== '') dispatch(addSearchFilter(query));
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
    if (e.target.value === '') dispatch(removeSearchFilter());
  };

  const cleanFilters = (): void => {
    dispatch(removeAllFilters());
    setQuery('');
  }

  return (
    <form className="search-form" onSubmit={submitSearch}>
      <input type="text" placeholder="Search" value={query} onChange={handleChanges} />
      <input type="submit" value="Search" />
      <button className="clean-filters" onClick={cleanFilters}>Clean</button>
    </form>
  );
};

export default SearchForm;
