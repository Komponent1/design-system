import React, { useMemo, useState } from 'react';
import { baseTableStyle, baseThStyle, borderedTdStyle } from './table.style';
import { Td } from './td';
import type { TableVariants } from './table.type';
import { Checkbox } from '../checkbox/checkbox';

export type TableProps = {
  datas: { [key: string]: React.ReactNode }[];
  columns: { header: string; accessor: string }[];
  variant?: TableVariants;
  selecterable?: boolean;
  onSelectChange?: (selectedRows: Set<number>) => void;
};
export const Table: React.FC<TableProps> = ({
  datas,
  columns,
  variant = 'default',
  selecterable = false,
  onSelectChange,
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const thStyle = useMemo(() => {
    switch (variant) {
      case 'bordered':
        return {
          ...baseThStyle,
          ...borderedTdStyle,
        };
      case 'striped':
      case 'default':
      default:
        return {
          ...baseThStyle,
          backgroundColor: '#f2f2f2',
        };
    }
  }, [variant]);

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedRows(new Set(datas.map((_, idx) => idx)));
      if (onSelectChange) {
        onSelectChange(new Set(datas.map((_, idx) => idx)));
      }
    } else {
      setSelectedRows(new Set());
      if (onSelectChange) {
        onSelectChange(new Set());
      }
    }
  };

  const handleRowSelect = (rowIndex: number, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(rowIndex);
    } else {
      newSelected.delete(rowIndex);
      setSelectAll(false);
    }
    setSelectedRows(newSelected);
    if (onSelectChange) {
      onSelectChange(newSelected);
    }
    if (newSelected.size === datas.length) {
      setSelectAll(true);
    }
  };

  return (
    <table style={baseTableStyle}>
      <thead>
        <tr>
          {selecterable && (
            <th style={{ ...thStyle, width: '50px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Checkbox checked={selectAll} onChange={handleSelectAll} size='sm' />
              </div>
            </th>
          )}
          {columns.map((col, index) => (
            <th key={index} style={thStyle}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datas.map((data, index) => (
          <tr key={index}>
            {selecterable && (
              <Td index={index} variant={variant}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Checkbox
                    checked={selectedRows.has(index)}
                    onChange={(checked) => handleRowSelect(index, checked)}
                    size='sm'
                  />
                </div>
              </Td>
            )}
            {Object.values(data).map((value, idx) => (
              <Td key={idx} index={index} variant={variant}>
                {value}
              </Td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
