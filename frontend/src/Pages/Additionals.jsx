import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const Additionals = () => {
  const clientId = useParams().id;
  const [client, setClient] = useState({});

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
        <span className="heighlight-heading">( {client.name} )</span>
      </div>
    </div>
  );
};

export default Additionals;
