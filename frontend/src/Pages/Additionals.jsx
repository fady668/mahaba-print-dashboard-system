import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import AdditionalForm from "../Componants/AdditionalForm";

const Additionals = () => {
  const clientId = useParams().id;
  const [client, setClient] = useState({});
  const [showNewAdditional, setShowNewAdditional] = useState(false);

  useEffect(() => {
    getClient();
  }, []);

  const getClient = async () => {
    const res = await api.get(`api/clients/${clientId}`);
    setClient(res.data[0]);
  };

  return (
    <div className="additionals-page">
      <h1 className="page-title">الاضافات الخارجيه</h1>
      <div className="page-content">
        <button onClick={() => setShowNewAdditional(true)} className="add-btn">
          أضافه جديدة
        </button>
        {showNewAdditional && (
          <>
            <span className="over-layout"></span>
            <div className="invoise-form focused">
              <span onClick={() => setShowNewAdditional(false)}>
                <i className="fa-solid fa-xmark"></i>
              </span>
              <AdditionalForm
                route={`/api/additionals/`}
                method="add"
                client={clientId}
              />
            </div>
          </>
        )}
        <span className="heighlight-heading">{client.name}</span>
      </div>
    </div>
  );
};

export default Additionals;
