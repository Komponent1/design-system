import React, { useCallback, useState } from 'react';
import {
  activePageNumberStyle,
  getCompactPageNumberStyle,
  getEllipsisStyle,
  navigationButtonStyle,
  getPageNumberStyle,
  getPaginationConatinerStyle,
} from './pagination.style';
import { useTheme } from '../theme/ThemeProvider';

type PaginationProps = {
  variant?: 'default' | 'compact';
  totalItems: number;
  itemsPerPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};
export const Pagination: React.FC<PaginationProps> = ({
  variant = 'default',
  totalItems,
  itemsPerPage,
  currentPage = 1,
  onPageChange,
}) => {
  const { theme } = useTheme();
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
        <div style={getPaginationConatinerStyle(theme)}>
          <button
            onClick={handlePrevious}
            disabled={page === 1}
            style={{
              ...navigationButtonStyle,
              color: page === 1 ? theme.color.text.disabled : theme.color.text.primary,
            }}
          >
            ‹
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={getCompactPageNumberStyle(theme)}>{page}</span>
            <span style={{ color: theme.color.text.secondary, fontWeight: 'normal' }}>of</span>
            <span>{totalPages}</span>
          </div>
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            style={{
              ...navigationButtonStyle,
              color: page === totalPages ? theme.color.text.disabled : theme.color.text.primary,
            }}
          >
            ›
          </button>
        </div>
      );
    case 'default':
    default:
  }
  return (
    <div style={getPaginationConatinerStyle(theme)}>
      <button
        onClick={handlePrevious}
        disabled={page === 1}
        style={{
          ...navigationButtonStyle,
          color: page === 1 ? theme.color.text.disabled : theme.color.text.primary,
        }}
      >
        ‹
      </button>
      {showLeftEllipsis && <span style={getEllipsisStyle(theme)}>...</span>}
      {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onClickPage(pageNumber)}
          disabled={pageNumber === page}
          style={{
            ...getPageNumberStyle(theme),
            ...(pageNumber === page
              ? {
                  ...activePageNumberStyle,
                  backgroundColor: theme.button.primary.bg.default,
                }
              : {}),
          }}
        >
          {pageNumber}
        </button>
      ))}
      {showRightEllipsis && <span style={getEllipsisStyle(theme)}>...</span>}
      <button
        onClick={handleNext}
        disabled={page === totalPages}
        style={{
          ...navigationButtonStyle,
          color: page === totalPages ? theme.color.text.disabled : theme.color.text.primary,
        }}
      >
        ›
      </button>
    </div>
  );
};
