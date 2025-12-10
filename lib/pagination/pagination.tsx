import React, { useCallback, useState } from 'react';
import {
  activePageNumberStyle,
  compactPageNumberStyle,
  ellipsisStyle,
  navigationButtonStyle,
  pageNumberStyle,
  paginationConatinerStyle,
} from './pagination.style';

type PagenationProps = {
  variant?: 'default' | 'compact';
  totalItems: number;
  itemsPerPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};
export const Pagenation: React.FC<PagenationProps> = ({
  variant = 'default',
  totalItems,
  itemsPerPage,
  currentPage = 1,
  onPageChange,
}) => {
  const [page, setPage] = useState<number>(currentPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = useCallback(() => {
    if (page > 1) {
      onPageChange(page - 1);
      setPage(page - 1);
    }
  }, [onPageChange, page]);

  const handleNext = useCallback(() => {
    if (page < totalPages) {
      onPageChange(page + 1);
      setPage(page + 1);
    }
  }, [onPageChange, totalPages, page]);

  const onClickPage = useCallback(
    (pageNumber: number) => {
      onPageChange(pageNumber);
      setPage(pageNumber);
    },
    [onPageChange],
  );

  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, page - 2);
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const showLeftEllipsis = totalPages > 5 && page > 3;
  const showRightEllipsis = totalPages > 5 && page < totalPages - 2;

  switch (variant) {
    case 'compact':
      return (
        <div style={paginationConatinerStyle}>
          <button onClick={handlePrevious} disabled={page === 1} style={navigationButtonStyle}>
            ‹
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={compactPageNumberStyle}>{page}</span>
            <span style={{ color: '#999', fontWeight: 'normal' }}>of</span>
            <span>{totalPages}</span>
          </div>
          <button onClick={handleNext} disabled={page === totalPages} style={navigationButtonStyle}>
            ›
          </button>
        </div>
      );
    case 'default':
    default:
  }
  return (
    <div style={paginationConatinerStyle}>
      <button onClick={handlePrevious} disabled={page === 1} style={navigationButtonStyle}>
        ‹
      </button>
      {showLeftEllipsis && <span style={ellipsisStyle}>...</span>}
      {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onClickPage(pageNumber)}
          disabled={pageNumber === page}
          style={{
            ...pageNumberStyle,
            ...(pageNumber === page ? activePageNumberStyle : {}),
          }}
        >
          {pageNumber}
        </button>
      ))}
      {showRightEllipsis && <span style={ellipsisStyle}>...</span>}
      <button onClick={handleNext} disabled={page === totalPages} style={navigationButtonStyle}>
        ›
      </button>
    </div>
  );
};
