import React, { useState, useEffect } from "react";
import img from "../Images/color-background.jpg";
import logoImg from "../Images/Mahabaprint-img.png";
import imgOne from "../Images/dashboard-icon-images-16.jpg";
import imgTwo from "../Images/clients-icon.jpg";
import imgThree from "../Images/paper-icon.webp";
import imgFour from "../Images/money-icon.webp";
import imgFive from "../Images/additions-icon.webp";
import imgSix from "../Images/kashf-icon-removebg-preview.png";
import imgSeven from "../Images/status-icon.jpg";
import imgEight from "../Images/logout-icon.jpg";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  return (
    <>
      <div className="dashboard">
        <img className="right-bg" src={img} alt="Background Image" />
        <div className="right-part">
          <div className="heading-content">
            <img src={logoImg} alt="Mahaba Print Image" />
            <p>مطبعة المحبه للطباعة والتوريدات</p>
          </div>
          <Link to="/" className="button">
            <img src={imgOne} alt="" />
            الصفحه الرئيسيه
          </Link>
          <Link to="/clients" className="button">
            <img src={imgTwo} alt="" />
            العملاء
          </Link>
          <Link to="/kashf" className="button">
            <img src={imgSix} alt="" />
            كشف حساب
          </Link>
          <Link to="/stat" className="button">
            <img src={imgSeven} alt="" />
            الاحصائيات
          </Link>
          <Link to={"/logout"} className="button logout-btn">
            <img src={imgEight} alt="" />
            تسجيل الخروج
          </Link>
        </div>
        <div className="left-part">
          {/* <h1>مرحباً ()</h1> */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
