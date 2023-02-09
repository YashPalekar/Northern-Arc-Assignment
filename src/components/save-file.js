import React, { useContext, useEffect, useState } from "react";
import writeXlsxFile from "write-excel-file";
import { MyContext } from "../context/app-context";

export const SaveFile = () => {

   const context = useContext(MyContext);

  async function saveFile() {
   await writeXlsxFile(context.data, {
      fileName: "updatedFile.xlsx",
    });
  }

  return <button onClick={saveFile}>Save File</button>;
};
