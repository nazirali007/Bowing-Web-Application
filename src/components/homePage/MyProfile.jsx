import React, { useState } from "react";
import VerticalSidebar from "../Sidebar/VerticalSidebar";
import HorizontalNavbar from "../Sidebar/HorizontalNavbar";
import CartProfile from "../SubComponents/CartProfile";
// import AlertComponent from "../CommonComponents/AlertComponent";

const MyProfile = () => {
  const [alert, setAlert] = useState(null);
  return (
    <div
      className="container-fluid p-0"
      style={{
        background: "white",
        height: "100vh",
        maxWidth: "1440px",
        width: "100%",
      }}
    >
      <div className="d-flex">
        <VerticalSidebar />
        <div style={{ width: "78%" }}>
          <HorizontalNavbar />
          <div className="m-5 text-white d-block"></div>
          <CartProfile />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
