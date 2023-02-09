import { useContext } from "react";
import { MyContext } from "../context/app-context";
import readXlsxFile from "read-excel-file";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  // File.
  function readFile() {
    console.log("in func");
    const input = document.getElementById("input");
    readXlsxFile(input.files[0]).then((rows) => {
      context.setData(rows);
      context.setTableHeadings(rows[0]);
      context.setPageNumber(1);
      navigate("/display");
    });
  }

  return <input type="file" onChange={readFile} id="input" />;
};

export default Home;
