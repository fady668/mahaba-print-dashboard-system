import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import ReceivedCashFrom from "../Componants/ReceivedCashFrom";
import ReceivedCashRow from "../Componants/ReceivedCashRow";
import swal from "sweetalert";

const ReceivedCash = () => {
  const clientId = useParams().id;
  const [client, setClient] = useState({});
  const [clientReceievedCash, setClientReceievedcash] = useState([]);
  const [updatedCash, setUpdatedCash] = useState({});
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showReceivedCashForm, setShowReceivedCashForm] = useState(false);

  useEffect(() => {
    getClient();
    getClientReceievedCash();
  }, []);

  const getClient = async () => {
    const res = await api.get(`api/clients/${clientId}`);
    setClient(res.data[0]);
  };

  const getClientReceievedCash = async () => {
    const res = await api.get(`/api/receivedcash/byclientid/${clientId}`);
    setClientReceievedcash(res.data);
  };

  const updateCash = (cash) => {
    setUpdatedCash(cash);
    setShowUpdateForm(true);
  };

  const deleteMess = (id) => {
    swal({
      title: "تنبيه !",
      text: "عند مسح الدفعه يتم ارجاء النقديه للعميل",
      icon: "warning",
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        api.delete(`/api/receivedcash/byid/${id}`);
        window.location.reload();
      } else {
        swal("لم يتم مسح الدفعة!");
      }
    });
  };

  return (
    <div className="receivedcash-page">
      <h1 className="page-title">النقديه المستلمه</h1>
      <div className="page-content">
        <div className="add-btn" onClick={() => setShowReceivedCashForm(true)}>
          اضافة دفعة جديدة
        </div>
        {showReceivedCashForm && (
          <>
            <span className="over-layout"></span>
            <div className="invoise-form focused">
              <span onClick={() => setShowReceivedCashForm(false)}>
                <i className="fa-solid fa-xmark"></i>
              </span>
              <ReceivedCashFrom
                route={`/api/receivedcash/`}
                method="add"
                client={clientId}
              />
            </div>
          </>
        )}
        {showUpdateForm && (
          <>
            <span className="over-layout"></span>
            <div className="invoise-form focused">
              <span onClick={() => setShowUpdateForm(false)}>
                <i className="fa-solid fa-xmark"></i>
              </span>
              <ReceivedCashFrom
                route={`/api/receivedcash/byid/${updatedCash.id}`}
                method="edit"
                cash={updatedCash}
              />
            </div>
          </>
        )}
        <span className="heighlight-heading">{client.name}</span>
        <table className="table">
          <thead>
            <tr>
              <td>ترتيب الدفعة</td>
              <td>قيمة الدفعة</td>
              <td>تاريخ الدفعة</td>
              <td>طريقة الدفع</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {clientReceievedCash.length != 0 ? (
              clientReceievedCash.map((cash) => (
                <tr key={cash.id} className="sorted-row">
                  <ReceivedCashRow cash={cash} />
                  <td>
                    <i
                      onClick={() => updateCash(cash)}
                      className="fa-solid fa-pen-to-square"
                    ></i>
                    <i
                      onClick={() => deleteMess(cash.id)}
                      className="fa-solid fa-trash"
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr key={0} className="notfound">
                <td>لا يوجد دفعات قديمة...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReceivedCash;
