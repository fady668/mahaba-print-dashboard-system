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
            <div className="grid">
                <div className="total-invoises-cash">
                    <h2>اجمالي حساب التعاملات</h2>
                </div>
                <div className="cash-sec">
                    <div className="total-received-cash"></div>
                    <div className="total-remaining-cash"></div>
                </div>
                <div className="clients-sec"></div>
                <div className="invoises-sec"></div>
                <div className="additionals-sec"></div>
                <div className="received-cash-sec"></div>
            </div>
        </div>
    );
};

export default Main;
