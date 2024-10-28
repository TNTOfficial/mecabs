import { useState } from "react";

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  initialPage: number;
}

export const usePagination = ({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalItems));
  };
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, totalItems));
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    nextPage,
    prevPage,
    goToPage,
  };
};
