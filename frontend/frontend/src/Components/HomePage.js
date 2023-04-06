import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
//import DisplayExcel from "./DisplayExcel";

export default function HomePage () {
  const {templateId}= useParams();
  var bgColors = {
    "Default": "#AE275F",
    "button": "#EB1165"
  };

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/template/templateheaders")
      .then((response) => {
        console.log(response.data);
        setApiData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getData=()=>{
    axios.get("http://localhost:9000/api/template/templateheaders")
    .then((getData)=>{
      setApiData(getData);
    })
  }

  const deleteTable =  () => {
     axios.delete(`http://localhost:9000/api/template/delete/`+templateId)
      .then(()=>{
        getData();

      })
     alert("Template deleted successfully!");
   
    }
  

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
        <h2>List of Templates</h2>
        
        <table className="table border shadow">
          <thead>
            <tr>
              <th>Template ID</th>
              <th>Creation Date</th>
              <th>Template Name</th>
              <th style={{ textAlign: 'center', paddingRight: '40px' }} >Actions</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((data) => (
              <tr key={data.template_id} >
                <td>{data.template_id}</td>
                <td>{data.creationDate}</td>
                <td>{data.templateName}</td>
                <td style={{ textAlign: 'center', paddingRight: '40px' }}>
                  <Link
                    style={{backgroundColor: bgColors.Default}}
                    className="btn btn-primary mx-2 border-light"
                    onClick={() => this.DisplayExcel(data.template_id)}
                    to={'/displayexcel/'+ data.template_id}
                    
                  >
                    View
                  </Link>
                {/*  <Link
                    className="btn btn-outline-primary mx-2 text-dark border-dark"
                    to={`/editexcel`}
                  >
                    Edit
            </Link> */}
                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => deleteTable(data.templateId)}
                    
                  >
                    Delete
                  </button>
    
                  <Link
                      style={{backgroundColor: bgColors.sucess}}
                      className="btn btn-success mx-2 border-light outline"
                      onClick={handleFileUpload}
                      to={'/uploadexcel/' + data.template_id}>

                      Upload

                  </Link>
                  
                  <Link
                      style={{backgroundColor: bgColors.sucess}}
                      className="btn btn-primary  mx-2 border-light outline"
                      
                      to={'/transactionheader' }>

                     History

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