import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DisplayExcel() {
  const {templateId} = useParams();
  const [excel, setExcel] = useState([]);

  var bgColors = {
    "Default": "#AE275F",
    "button": "#EB1165"
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    await axios.get(`http://localhost:9000/api/template/templatedetails/${templateId}`)
      .then(res => {
        console.log(res.data)

        setExcel(res.data)
      }).catch(err => console.log(err))
  };

  return (
    <div className="container">
      <div className="py-4 table-responsive">
        <table className="table table-striped table-hover table-bordered border-dark">
          <thead>
            <tr>
             
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Field Name</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Field Order</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Template ID</th>
             
            </tr>
          </thead>
          <tbody>
            {excel.map((payment) => (
              <tr>
              
                <td>{payment[1]}</td>
                <td>{payment[2]}</td>
                <td>{payment[6]}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}