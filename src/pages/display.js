import React from "react";
import { Filter } from "../components/filter";
import { Pagination } from "../components/pagination";
import Table from "../components/table";
import { SaveFile } from "../components/save-file";

function Display() {
  return (
    <div className="align-center">
      <Table />
      <div>
        <Pagination />
        <Filter />
        <SaveFile />
      </div>
    </div>
  );
}

export default Display;


