import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UploadExcel () {
  const navigate = useNavigate();
  const {templateId}= useParams();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);

  const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

  const handleFileChange = (event) => {
     setFile(event.target.files[0]);
     setFileName(event.target.files[0].name);
    let selectedFile = event.target.files[0];
    console.log(selectedFile.type);
    if(selectedFile){
      
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        } 
      }
      else{
        alert('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('Please select your file');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //localhost:9000/api/transaction/upload/file
    const formData = new FormData();
    formData.append('file', file);
    try {
     const response = await axios.post(`http://localhost:9000/api/transaction/upload/file/`+ templateId, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // reset file input and file name state
      setFile(null);
      setFileName('');
      navigate("/");
    } catch (error) {
      console.log(error);
    }
   
     
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>Upload Excel File</h2>
        <div>
      {/*<label><h5>Upload Excel file</h5></label>*/}
      <br></br>
      <form className='form-group' autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <input type="file" className='form-control' onChange={handleFileChange} required />
          {fileName && <p>Selected file: {fileName}</p>}
        </div>
        <button type="submit" className='btn btn-success'
          style={{ marginTop: 5 + 'px' }}>Upload</button>
      </form>
    </div>
      </div>

    </div>
  );
}

export default UploadExcel;