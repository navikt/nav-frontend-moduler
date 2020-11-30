import React from "react";
import cl from "classnames";
import { useTable, useSortBy } from "react-table";
import "@nav-frontend/table-styles";
import { add } from "cypress/types/lodash";

interface TableProps {
  columns: Array<any>;
  data: Array<any>;
  size?: "medium" | "small";
}

const Table = ({ columns, data, size = "medium" }: TableProps) => {
  const orderByFn = React.useMemo(() => {
    let state;
    return (arr, [sortFn], [dir], a) => {
      console.log(arr, sortFn, dir, a);
      state = [...(state || arr)].sort((a, b) =>
        dir === false || dir === "desc" ? sortFn(b, a) : sortFn(a, b)
      );
      return state;
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data, disableMultiSort: true, orderByFn }, useSortBy);

  return (
    <table
      {...getTableProps()}
      className={cl("navds-table", `navds-table--${size}`)}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "⬇️" : "⬆️") : "↕️"}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
