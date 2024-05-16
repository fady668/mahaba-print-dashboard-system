import React, { useEffect, useState } from "react";
import api from "../api";
import swal from "sweetalert";

const ClientForm = ({ route, method, clientName, clientPhone }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const formTitle = method === "addClient" ? "أضافة عميل" : "تعديل بيانات عميل";

  useEffect(() => {
    if (method === "editClient") {
      setName(clientName);
      if (clientPhone === "----------") {
        setPhone("");
      } else {
        setPhone(clientPhone);
      }
    }
  }, []);

  const formSubmit = () => {
    if (method === "addClient") {
      api.post(route, { name, phone });
    } else if (method === "editClient") {
      api.patch(route, { name, phone });
    }
    // return <Navigate to={"/clients"} />;
  };

  return (
    <form onSubmit={formSubmit}>
      <h1>{formTitle}</h1>
      <label htmlFor="client-name">أسم العميل</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        required
      />
      <label htmlFor="client-phone">هاتف العميل</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
      />
      <button type="submit">
        {method === "addClient" ? "أضافة" : "تعديل"}
      </button>
    </form>
  );
};

export default ClientForm;
