import styles from "./SearchBar.module.scss";
import { use, useState } from "react";

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const  handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);

    }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
            Search a book
          </label>
          <input className={styles.input}
            type = "text"
            value = {searchTerm}
            placeholder="e.g. Harry Porter"
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        <button className={styles.button} type = "submit">Search</button>

    </form>
  );
};

export default SearchBar