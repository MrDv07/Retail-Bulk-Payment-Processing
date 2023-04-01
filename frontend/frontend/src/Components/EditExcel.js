import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function EditExcel() {
  const [excel, setExcel] = useState({
    debitAccountNumber:"",
    transactionAmount:"",
    transactionCurrency:"",
    beneficiaryName: "",
    beneficiaryAccountNumber: "",
    IFSCCode: "",
    transactionDate: "",
    paymentMode: "",
    customerReferenceNumber: "",
    beneficiaryCode: "",
    accountType: "",
    beneficiaryType: "",
    lei: "",
    debitNarration: "",
    creditNarration: "",
    invoiceNumber: "",
    beneficiaryAddress1: "",
    beneficiaryAddress2: "",
    beneficiaryAddress3: "",
    beneficiaryCity: "",
    beneficiaryState: "",
    beneficiaryPinCode: "",
    beneficiaryEmail1: "",
    beneficiaryEmail2: "",
    mobileNumber: "",
    addInfo1: "",
    addInfo2: "",
    addInfo3: "",
    addInfo4: "",
    addInfo5: "",
    addInfo6: ""
  });

  const { debitAccountNumber, transactionAmount, transactionCurrency, beneficiaryName, beneficiaryAccountNumber, IFSCCode, transactionDate, paymentMode, customerReferenceNumber, beneficiaryCode, accountType, beneficiaryType, lei, debitNarration, creditNarration, invoiceNumber, beneficiaryAddress1, beneficiaryAddress2, beneficiaryAddress3, beneficiaryCity, beneficiaryState, beneficiaryPinCode, beneficiaryEmail1, beneficiaryEmail2, mobileNumber, addInfo1, addInfo2, addInfo3, addInfo4, addInfo5, addInfo6 } = excel;

  useEffect(() => {
    loadUsers();
  }, []);

  const onInputChange = (e) => {
    const value=e.target.value
    setExcel({ ...excel, [e.target.debitAccountNumber]: value });
  };

  const loadUsers = async () => {
    await axios.get(`http://localhost:9000/api/bulkpayment/table/manager`)
      .then(res => {
        console.log(res.data)

        setExcel(res.data)
      }).catch(err => console.log(err))
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9000/api/bulkpayment/save", excel)
      .then((response) => { 
        console.log(response)
        alert("Successfully Registered...!!!")
      }).catch((err) => { 
        console.log(err)
        alert(err)
      })
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Debit Account No.</th>
              <th scope="col">Transaction Amount</th>
              <th scope="col">Transaction Currency</th>
              <th scope="col">Beneficiary Name</th>
              <th scope="col">Beneficiary Account Number</th>
              <th scope="col">IFSC Code</th>
              <th scope="col">Transaction Date</th>
              <th scope="col">Payment Mode</th>
              <th scope="col">Customer Reference Number</th>
              <th scope="col">Benefciary Code</th>
              <th scope="col">Account Type</th>
              <th scope="col">Benefciary Type</th>
              <th scope="col">LEI</th>
              <th scope="col">Debit Narration</th>
              <th scope="col">Credit Narration</th>
              <th scope="col">Invoice Number</th>
              <th scope="col">Beneficiary Address 1</th>
              <th scope="col">Beneficiary Address 2</th>
              <th scope="col">Beneficiary Address 3</th>
              <th scope="col">Beneficiary City</th>
              <th scope="col">Beneficiary State</th>
              <th scope="col">Beneficiary Pin Code</th>
              <th scope="col">Beneficiary Email 1</th>
              <th scope="col">Beneficiary Email 2</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Add Info 1</th>
              <th scope="col">Add Info 2</th>
              <th scope="col">Add Info 3</th>
              <th scope="col">Add Info 4</th>
              <th scope="col">Add Info 5</th>
              <th scope="col">Add Info 6</th>
            </tr>
          </thead>
          <tbody>
            {excel.map((payment) => (
              <tr>
                <td>{payment[0]}</td>
                <td>{payment[1]}</td>
                <td>{payment[2]}</td>
                <td>{payment[3]}</td>
                <td>{payment[4]}</td>
                <td>{payment[5]}</td>
                <td>{payment[6]}</td>
                <td>{payment[7]}</td>
                <td>{payment[8]}</td>
                <td>{payment[9]}</td>
                <td>{payment[10]}</td>
                <td>{payment[11]}</td>
                <td>{payment[12]}</td>
                <td>{payment[13]}</td>
                <td>{payment[14]}</td>
                <td>{payment[15]}</td>
                <td>{payment[16]}</td>
                <td>{payment[17]}</td>
                <td>{payment[18]}</td>
                <td>{payment[19]}</td>
                <td>{payment[20]}</td>
                <td>{payment[21]}</td>
                <td>{payment[22]}</td>
                <td>{payment[23]}</td>
                <td>{payment[24]}</td>
                <td>{payment[25]}</td>
                <td>{payment[26]}</td>
                <td>{payment[27]}</td>
                <td>{payment[28]}</td>
                <td>{payment[29]}</td>
                <td>{payment[30]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}