import React, { useState } from "react";

export const MyContext = React.createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [tableHeadings, setTableHeadings] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const value = {
    data,
    setData,
    tableHeadings,
    setTableHeadings,
    tableData,
    setTableData,
    filter,
    setFilter,
    pageNumber,
    setPageNumber,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
