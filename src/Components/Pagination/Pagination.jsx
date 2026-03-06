import styles from "./Pagination.module.scss";
import { hasNextPage, hasPrevPage, getTotalPages } from "./PaginationLogic.js";

export default function Pagination({
  pageNumber,
  pageSize,
  totalResults,
  onPrev,
  onNext,
  isLoading,
}) {
  const prevDisabled = !hasPrevPage(pageNumber) || isLoading;
  const nextDisabled = !hasNextPage(pageNumber, pageSize, totalResults) || isLoading;

  const totalPages = getTotalPages(totalResults, pageSize);

  return (
    <div className={styles.pagination}>
      <button type="button" onClick={onPrev} disabled={prevDisabled}>
        Prev
      </button>

      <span className={styles.pageInfo}>
        Page {pageNumber}
        {totalPages > 0 ? ` / ${totalPages}` : ""}
      </span>

      <button type="button" onClick={onNext} disabled={nextDisabled}>
        Next
      </button>
    </div>
  );
}