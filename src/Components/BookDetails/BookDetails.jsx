import styles from "./BookDetails.module.scss";
const BookDetails = ({book, onClose}) => {

    if(!book) return null;
    const bookInfo = book.volumeInfo || {};
    const bookTitle = bookInfo.title || "Untitled";
    const bookAuthors = bookInfo.authors && bookInfo.authors.length > 0 ? bookInfo.authors.join(", ") : "Unknown author";
    const bookDescription = bookInfo.description || "No description available";
    const bookPublisher= bookInfo.publisher || "Publisher not available";
    const bookPublishedDate = bookInfo.publishedDate || "Date not available";

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div  className={styles.modal} onClick={(e) => e.stopPropagation()}>

      
        <button className={styles.closeBtn} type="button" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <h2  className={styles.title}>{bookTitle}</h2>
        <p  className={styles.details} >Author: {bookAuthors}</p>
        <p  className={styles.details}>Publisher: {bookPublisher}</p>
        <p  className={styles.details}>Published: {bookPublishedDate}</p>
        <p className={styles.description}>{bookDescription}</p>
      </div>
    </div>
  );
}

export default BookDetails