import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TransactionList() {
  const {transactionId}= useParams();
  const [excel, setExcel] = useState([]);

  var bgColors = {
    "Default": "#AE275F",
    "button": "#EB1165"
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    await axios.get(`http://localhost:9000/api/transaction/templatedetails/${transactionId}`)
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
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Debit Account No.</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Transaction Amount</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Transaction Currency</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Beneficiary Name</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Beneficiary Account Number</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">IFSC Code</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Transaction Date</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Payment Mode</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Customer Reference Number</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Benefciary Code</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Account Type</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Benefciary Type</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">LEI</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Debit Narration</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Credit Narration</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Invoice Number</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Beneficiary Address 1</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Beneficiary Address 2</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Beneficiary Address 3</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Beneficiary City</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Beneficiary State</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Beneficiary Pin Code</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Beneficiary Email 1</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Beneficiary Email 2</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Mobile Number</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Add Info 1</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Add Info 2</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Add Info 3</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Add Info 4</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Add Info 5</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Add Info 6</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Payment ID</th>
              <th className="text-light" style={{backgroundColor: bgColors.Default}} scope="col">Template ID</th>
            </tr>
          </thead>
          <tbody>
            {excel.map((payment) => (
              <tr>
                <td>{payment[23]}</td>
                <td>{payment[30]}</td>
                <td>{payment[2]}</td>
                <td>{payment[17]}</td>
                <td>{payment[9]}</td>
                <td>{payment[1]}</td>
                <td>{payment[32]}</td>
                <td>{payment[28]}</td>
                <td>{payment[8]}</td>
                <td>{payment[10]}</td>
                <td>{payment[10]}</td>
                <td>{payment[20]}</td>
                <td>{payment[12]}</td>
                <td>{payment[13]}</td>
                <td>{payment[14]}</td>
                <td>{payment[15]}</td>
                <td>{payment[16]}</td>
                <td>{payment[3]}</td>
                <td>{payment[18]}</td>
                <td>{payment[19]}</td>
                <td>{payment[10]}</td>
                <td>{payment[21]}</td>
                <td>{payment[22]}</td>
                <td>{payment[10]}</td>
                <td>{payment[24]}</td>
                <td>{payment[25]}</td>
                <td>{payment[26]}</td>
                <td>{payment[27]}</td>
                <td>{payment[7]}</td>
                <td>{payment[6]}</td>
                <td>{payment[10]}</td>
                <td>{payment[0]}</td>
                <td>{payment[29]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}