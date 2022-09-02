import React, { useMemo } from "react";
import { useTable } from "react-table";
import BootstrapTable from "react-bootstrap/Table";
import ButtonsActionsTable from "../helpers/ButtonsActionsTable";

function TagsTable({ tags, refetch }) {
  const data = useMemo(() => tags, [tags]);

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Actions",
        accessor: "buttons",
        Cell: ({ row }) => (
          <ButtonsActionsTable object={row.original} refetch={refetch} />
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <BootstrapTable striped bordered hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BootstrapTable>
  );
}

export default TagsTable;
