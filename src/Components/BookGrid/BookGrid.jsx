import BookCard from "../BookCard/BookCard";
import styles from "./BookGrid.module.scss";

const BookGrid = ({books, onBookSelect}) => {
  return (
<section className={styles.grid} aria-label = "Book Results">
    {books.map((book) => (
        <BookCard key = {book.id} book = {book} onSelect = {onBookSelect} />
    ))} 

</section>
  )
}

export default BookGrid