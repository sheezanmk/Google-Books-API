export const getStartIndex = (pageNumber, pageSize) => {
  return (pageNumber - 1) * pageSize;
};

export const hasPrevPage = (pageNumber) => {
  return pageNumber > 1;
};

export const hasNextPage = (pageNumber, pageSize, totalResults) => {
  return pageNumber * pageSize < totalResults;
};

export const getTotalPages = (totalResults, pageSize) => {
  if (!totalResults) return 0;
  return Math.ceil(totalResults / pageSize);
};