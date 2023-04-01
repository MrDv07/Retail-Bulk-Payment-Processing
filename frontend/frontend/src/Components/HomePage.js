import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DisplayExcel from "./DisplayExcel";

export default function HomePage () {
  var bgColors = {
    "Default": "#AE275F",
    "button": "#EB1165"
  };
  const [tableNames, setTableNames] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9000/api/bulkpayment/tablenames");
    setTableNames(result.data);
  };

  const deleteUser = async (table) => {
    await axios.delete(`http://localhost:9000/api/bulkpayment/table/${table}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>List of Files</h2>
        <table className="table border shadow">
          <tbody>
            {tableNames.map((table) => (
              <tr>
                <td>{table}</td>
                <td width="270">
                  <Link
                    style={{backgroundColor: bgColors.Default}}
                    className="btn btn-primary mx-2 border-light"
                    onClick={() => DisplayExcel.loadUsers({table})}
                    to={`/displayexcel`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2 text-dark border-dark"
                    to={`/editexcel`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => deleteUser(table)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}