import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addSearchFilter, removeSearchFilter } from 'redux_utils/actions';

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

  return (
    <form onSubmit={submitSearch}>
      <input type="text" value={query} onChange={handleChanges} />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
