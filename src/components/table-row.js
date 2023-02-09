import React, { useContext } from "react";
import { MyContext } from "../context/app-context";

export default function TableRow(props) {
  let rowData = props.rowData;
  const context = useContext(MyContext);

  const show = (event, rowIndexOfElemntChanged) => {
    console.log(event.target);
    let tempIndex = context.data.indexOf(rowData);
    console.log(tempIndex);
    let tempData = context.data;
    tempData[tempIndex][rowIndexOfElemntChanged] = event.target.innerText;
    context.setData(tempData);
  }

  return (
    <tr key={rowData[0]}>
      {/* <th scope="row">1</th> */}
      {rowData.map((i,index) => (
        !context.filter.includes(index) ? <td onBlur={(event) => {show(event, index)}} contentEditable={true}>{i}</td> : null
      ))}
    </tr>
  );
}
