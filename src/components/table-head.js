import React, { useContext, useState } from "react";
import { MyContext } from "../context/app-context";

export default function TableHead(props) {
  let order = "ascending";
  const context = useContext(MyContext);
  let targetIndex = 0;

  function changeOrder(event) {
    order === "ascending" ? order = "descending" : order = "ascending";

    let targetString = event.target.innerText;
    targetString = removeArrow(targetString);

    targetIndex = props.tableHead.indexOf(targetString);

    if (order === "ascending") {
      targetString += "▲";
    } else {
      targetString += "▼";
    }

    event.target.innerText = targetString;
    console.log(targetIndex);

    let sortedArray = sort(context.tableData, targetIndex, order);
    console.log(sortedArray);

    // console.log(context.tableData);
    context.setTableData(sortedArray);
    // console.log(context.tableData);
    //  console.log("sorted data is " , context.tableData);
  }

  function sort(array, targetIndex, orderF) {
    console.log(array, "first");
    if (orderF === "ascending") {
      if (typeof array[0][targetIndex] === "number")
        array.sort(function (a, b) {
          return a[targetIndex] - b[targetIndex];
        });
      else array.sort();
    } else {
      if (typeof array[0][targetIndex] === "number")
        array.sort(function (a, b) {
          return b[targetIndex] - a[targetIndex];
        });
        else array.sort();
    }

    return array;

    //  if (array.length < 2) {
    //    return array;
    //  }
    //  let pivot_element = array[array.length - 1][targetIndex];
    //  let left_sub_array = [];
    //  let right_sub_array = [];

    //  if (order === "ascending") {
    //    for (let i = 0; i < array.length - 1; i++) {
    //      if (array[i][targetIndex] < pivot_element) {
    //        left_sub_array.push(array[i]);
    //      } else {
    //        right_sub_array.push(array[i]);
    //      }
    //    }
    //  } else {
    //    for (let i = 0; i < array.length - 1; i++) {
    //      if (array[i][targetIndex] > pivot_element) {
    //        left_sub_array.push(array[i]);
    //      } else {
    //        right_sub_array.push(array[i]);
    //      }
    //    }
    //  }
    //  return [...sort(left_sub_array), pivot_element, ...sort(right_sub_array)];
  }

  function removeArrow(str) {
    if (str.includes("▲") || str.includes("▼"))
      str = str.slice(0, str.length - 1);
    return str;
  }

  return (
    <tr>
      {props.tableHead.map((i, index) =>
        !context.filter.includes(index) ? (
          <th className="table-heading" onClick={changeOrder}>
            {i === null ? "" : i}
          </th>
        ) : (
          <></>
        )
      )}
    </tr>
  );
}

// ▲▼
// !context.filter.includes(index) ? <td>{i}</td> : null
