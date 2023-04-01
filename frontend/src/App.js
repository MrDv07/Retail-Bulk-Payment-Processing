import React from 'react';
import { Route,Routes } from 'react-router-dom';
import WebsiteNavigation from './Components/WebsiteNavigation';
import HomePage from './Components/HomePage';
import DisplayExcel from './Components/DisplayExcel';
import EditExcel from './Components/EditExcel';
import UploadExcel from './Components/UploadExcel';
import CreateTemplate from './Components/CreateTemplate';

function App() {
  return (
    <div>
    <WebsiteNavigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/displayexcel" element={<DisplayExcel />} />
        <Route path="/editexcel" element={<EditExcel/>} />
        <Route path="/uploadexcel" element={<UploadExcel/>} />
        <Route path="/CreateTemplate" element={<CreateTemplate/>} />
    </Routes>

    </div>
  );
}

export default App