import React, { useEffect, useState,  } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
//import DisplayExcel from "./DisplayExcel";

export default function TransactionHeader () {
  const {transactionId}= useParams();
  var bgColors = {
    "Default": "#AE275F",
    "button": "#EB1165"
  };

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/transaction/transactionheaders")
      .then((response) => {
        console.log(response.data);
        setApiData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  

  const handleFileUpload = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    axios.post("http://localhost:9000/api/transaction/upload/file/", formData)
      .then((response) => {
        console.log(response.data);
        alert("File uploaded successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  return (
    <div className="container">
      <div className="py-4">
        <h2>List of Transaction</h2>
        
        <table className="table border shadow">
          <thead>
            <tr>
              <th>Transaction Header ID</th>
              <th>File Name</th>
              <th>File Type</th>
              <th>Upload Date</th>
              <th style={{ textAlign: 'center', paddingRight: '40px' }} >Actions</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((data) => (
              <tr key={data.transactionId} >
                <td>{data.transactionId}</td>
                <td>{data.name}</td>
                <td>{data.fileType}</td>
                <td>{data.uploadDate}</td>
                <td style={{ textAlign: 'center', paddingRight: '40px' }}>
                  
                  <Link
                      style={{backgroundColor: bgColors.sucess}}
                      className="btn btn-primary  mx-2 border-light outline"
                      onClick={handleFileUpload}
                      to={'/transactionlist/' + data.transactionId }>

                     Transaction

                  </Link>
                  

                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}