import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import ReceivedCashFrom from "../Componants/ReceivedCashFrom";

const ReceivedCash = () => {
    const clientId = useParams().id;
    const [client, setClient] = useState({});
    const [showReceivedCashForm, setShowReceivedCashForm] = useState(false);

    useEffect(() => {
        getClient();
    }, []);

    const getClient = async () => {
        const res = await api.get(`api/clients/${clientId}`);
        setClient(res.data[0]);
    };

    return (
        <div className="receivedcash-page">
            <h1 className="page-title">النقديه المستلمه</h1>
            <div className="page-content">
                <div
                    className="add-btn"
                    onClick={() => setShowReceivedCashForm(true)}>
                    اضافة دفعة جديدة
                </div>
                {showReceivedCashForm && (
                    <>
                        <span className="over-layout"></span>
                        <div className="invoise-form focused">
                            <span
                                onClick={() => setShowReceivedCashForm(false)}>
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
                <span className="heighlight-heading">( {client.name} )</span>
            </div>
        </div>
    );
};

export default ReceivedCash;
