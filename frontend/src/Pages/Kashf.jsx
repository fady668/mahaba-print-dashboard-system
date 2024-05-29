import React, { useEffect, useState } from "react";
import api from "../api";
import arrow from "../Images/left-arrow.png";

const Kashf = () => {
  const [clients, setClients] = useState([]);
  const [clientOfKashf, setClientOfKashf] = useState({});
  const [select, setSelect] = useState("");
  const [dropDown, setDropDown] = useState(true);
  const [showClientForm, setShowClientForm] = useState(true);

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    const res = await api.get("/api/clients/");
    setClients(res.data);
  };

  const clientClicked = (client) => {
    setSelect(client.name);
    setClientOfKashf(client);
    setDropDown(false);
    setShowClientForm(false);
  };

  const formSubmit = () => {
    setShowClientForm(false);
  };

  return (
    <div className="kashf-page">
      <h1 className="page-title">كشف حساب</h1>
      {showClientForm && (
        <form onSubmit={() => formSubmit()} className="kashf-form">
          <i className="fa-regular fa-user"></i>
          <label className="kashf-form-label">اختر العميل</label>
          <input
            value={select}
            onChange={(e) => {
              setSelect(e.target.value);
            }}
            name="select-value"
            className="form-input"
          />
          {select && dropDown && (
            <div className="kashf-drop-menu search-drop-menu">
              {clients
                .filter((client) => {
                  const value = select.toLowerCase();
                  const c = client.name.toLowerCase();

                  return value && c.startsWith(value) && c;
                })
                .map((client) => (
                  <span onClick={() => clientClicked(client)} key={client.id}>
                    {client.name}
                  </span>
                ))}
            </div>
          )}
          {/* <button type="submit" className="form-button kashf-form-btn">
              اختيار
            </button> */}
        </form>
      )}
      {!showClientForm && (
        <>
          <span className="kashf-client-title heighlight-heading">
            {clientOfKashf.name}
          </span>
          <button
            className="step-back"
            onClick={() => window.location.reload()}
          >
            أختيار عميل اخر <img src={arrow} alt="" />
          </button>
          <div className="grid">
            <div className="child kashf-total-cash">
              <p className="title">حساب العميل</p>
              <span className="content">{clientOfKashf.totalCash}</span>
            </div>
            <div className="child kashf-received-cash">
              <p className="title">النقديه المستلمه</p>
              <span className="content">{clientOfKashf.receivedCash}</span>
            </div>
          </div>
          <div className="kashf-invoises"></div>
          <div className="kashf-additionals"></div>
        </>
      )}
    </div>
  );
};

export default Kashf;
