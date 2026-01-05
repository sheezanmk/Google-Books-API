import styles from "./BookCard.module.scss";
const BookCard = ({book, onSelect}) => {

    const bookInfo = book.volumeInfo;

    const bookTitle = bookInfo.title ? bookInfo.title : "Untitled";

    let bookAuthors = "Unknown author";
    if( bookInfo.authors && bookInfo.authors.length > 0) {
        bookAuthors = bookInfo.authors.join(", ");
    }

    let bookDescription = "No description available";
   if(bookInfo.description) {
        bookDescription =bookInfo.description;
        if(bookDescription.length > 140) {
            bookDescription = bookDescription.slice(0, 140) + "..." ;
        }
    }

    let bookThumbnail = "";
    if(bookInfo.imageLinks && bookInfo.imageLinks.thumbnail) {
        bookThumbnail = bookInfo.imageLinks.thumbnail;
    }

  return (
    <article className={styles.card} onClick={()=> onSelect(book)}>
        <div className={styles.imageWrap}>
        {bookThumbnail ? (<img src ={bookThumbnail} alt={"Cover of " + bookTitle}/>) : (<div className={styles.noImage}>No Image</div>)}
        </div>

         
        <p className={styles.author}>{bookAuthors}</p>
      

    </article>
  )
}

export default BookCard