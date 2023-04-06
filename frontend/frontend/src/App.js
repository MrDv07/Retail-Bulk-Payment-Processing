import React from 'react';
import { Route,Routes } from 'react-router-dom';
import WebsiteNavigation from './Components/WebsiteNavigation';
import HomePage from './Components/HomePage';
import DisplayExcel from './Components/DisplayExcel';
import TransactionHeader from './Components/TransactionHeader';
import UploadExcel from './Components/UploadExcel';
import TransactionList from './Components/TransactionList';

function App() {
  return (
    <div>
    <WebsiteNavigation />

      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/displayexcel/:templateId" Component={DisplayExcel} element={<DisplayExcel />} />
        
        <Route path="/uploadexcel/:templateId" Component={UploadExcel} element={<UploadExcel/>} />
        <Route path="/transactionlist/:transactionId" Component={TransactionList} element={<TransactionList/>} />
        <Route path="/transactionheader" Component={TransactionHeader} element={<TransactionHeader/>} />
       
    </Routes>

    </div>
  );
}

export default App