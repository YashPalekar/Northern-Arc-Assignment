import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/app-context";

export const Filter = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    console.log(context.filter);
  }, [context.filter]);

  function updateFilter(event, index) {
    console.log(event.target.checked, context.filter);
    if (event.target.checked === true) {
      context.setFilter([...context.filter, index]);
    } else {
      let tempArr = context.filter;
      tempArr = tempArr.filter((i) => i !== index);
      console.log("never runs", tempArr);

      context.setFilter(tempArr);
    }
  }

  return (
    <div className="d-inline-flex">
      
      Select columns to hide :
      
      {context.tableHeadings.map((i, index) =>
        index === 0 ? null : (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={(event) => updateFilter(event, index)}
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              {i}
            </label>
          </div>
        )
      )}
    </div>
  );
};
