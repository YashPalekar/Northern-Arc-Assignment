import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/app-context";
import TableHead from "./table-head";
import TableRow from "./table-row";

export default function Table(props) {
  const context = useContext(MyContext);

  // tableData.splice(0, 1);
  return (
    <table className="table table-success">
      <TableHead tableHead={context.tableHeadings} />
      {context.tableData.map((i, index) =>
        index !== 0 ? <TableRow rowData={i}></TableRow> : null
      )}
      {/* <TableRow rowData={tableData[1]} /> */}
    </table>
  );
}
