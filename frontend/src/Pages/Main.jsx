import React, { useState } from "react";

const Main = () => {
  const [totalCash, setTotalCash] = useState("");
  const [totalReceivedCash, setTotalReceivedCash] = useState("");
  const [totalRemainingCash, setTotalRemainingCash] = useState("");
  const [clients, setClients] = useState([]);
  const [invoises, setInvoises] = useState([]);
  const [additionals, setAdditionals] = useState([]);
  const [receivedCash, setReceivedCash] = useState([]);

  return (
    <div className="main-page">
      <h1 className="page-title">الصفحه الرئيسيه</h1>
      <div className="flex">
        <div className="user-total-cash">
          <h2>اجمالي حساب التعاملات</h2>
        </div>
        <div className="cash-sec">
          <div className="total-received-cash">
            <h3>اجمالي النقديه المستلمه</h3>
            <span className="vlaue"></span>
          </div>
          <div className="total-remaining-cash">
            <h3>اجمالي النقديه المتبقيه</h3>
            <span className="vlaue"></span>
          </div>
        </div>
        <div className="clients-sec">
          <h2>اخر العملاء المضافه</h2>
        </div>
        <div className="invoises-sec">
          <h2>اخر الفواتير المضافه</h2>
        </div>
        <div className="additionals-sec">
          <h2>اخر الاضافات الخارجيه</h2>
        </div>
        <div className="received-cash-sec">
          <h2>اخر النقديه المستلمه</h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
