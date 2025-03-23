import css from './SearchBar.module.css';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar({ onSearchSubmit }) {
  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={onSearchSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.searchInput}
          name="searchInput"
        />
        <button type="submit" className={css.searchButton}>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
