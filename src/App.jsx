import { useState } from "react";
import { searchBooks } from "./api/googlebooksapi";
import  SearchBar from "./Components/SearchBar/SearchBar";
import BookGrid from "./Components/BookGrid/BookGrid";
import styles from "./App.module.scss";
import booksImg from "./assets/books.png";
import BookDetails from "./Components/BookDetails/BookDetails";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 40;
const [totalResults, setTotalResults]= useState(0);
const [selectedBook, setSelectedBook] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
  

const handleSearch = async (searchTerm) => {

  if (!searchTerm.trim()) {
    setQuery("");
    setBooks([]);
    setTotalResults(0);
    setStatus("Empty");
    setError("Please enter a keyword");
    return;
  }
    setQuery(searchTerm);
    setStatus("Loading");
    setError("");
    setPageNumber(1);

    try {
      const firstIndex = 0;
      const data = await searchBooks(searchTerm, firstIndex, pageSize);

      setTotalResults(data.totalItems ? data.totalItems : 0);
      console.log(data);

      if (data.items && data.items.length > 0) {
        setBooks(data.items);
        setStatus("Success");
      } else {
        setBooks([]);
        setStatus("Empty");
      }
    } catch (err) {
      setBooks([]);
   
      setStatus("Error");
      setError("Something went wrong");
    }
  };

  const fetchPage = async (nextPage) => {

    if (!query) return;
    setStatus("Loading");
  setError("");

  try {
    const startIndex = (nextPage - 1) * pageSize;
    const data = await searchBooks(query, startIndex, pageSize);

    setTotalResults(data.totalItems ? data.totalItems : 0);

    if (data.items && data.items.length > 0) {
      setBooks(data.items);
      setPageNumber(nextPage);
      setStatus("Success");
    } else {
      setBooks([]);
      setStatus("Empty");
    }
  } catch (err) {
    
    setStatus("Error");
    setError("Something went wrong while fetching books.");
  }
  };

  const openModal = (book) => {
  setSelectedBook(book);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
  setSelectedBook(null);
};

  return (
    
    <main className={styles.main}>
       <section className={styles.landingPage}>
      
      <div className={styles.left}>
      <h1 className={styles.title}>From classics to discoveries, explore books that match your curiosity.</h1>
    <p className={styles.subtitle}>
      Search the Google Books database by title, author, or keyword.
    </p>
       <div className={styles.search}>
      <SearchBar onSearch={handleSearch} />
    </div>
      

      {status === "Loading" && <p className={styles.message}>Searching...</p>}
      {status === "Empty" && <p className={styles.message}>No results found for "{query}"</p>}
      {status === "Error" && <p className={styles.error}>{error}</p>}
      </div>
      <div className={styles.right}>
        <img className={styles.image} src={booksImg} alt="Book Cover" />
        </div>
    </section>
   {status === "Success" && (
    <section className={styles.searchResults}>
      <div className={styles.resultsHeader}>
      <h2 className={styles.searchResultsTitle}>Results for {query}</h2>
      <div className={styles.pagination}>
         <button
          type="button"
          onClick={() => fetchPage(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Prev
        </button>

         <span>
          Page {pageNumber}
        </span>

        <button
          type="button"
          onClick={() => fetchPage(pageNumber + 1)}
          disabled={pageNumber * pageSize >= totalResults}
        >
          Next
        </button>
        </div>
        </div>
      <BookGrid books={books} onBookSelect={openModal} />
    </section>
  )}

  {isModalOpen && <BookDetails book={selectedBook} onClose={closeModal} />}
    </main>
    
  );
}

export default App;
