import React, { useState } from "react";
import VerticalSidebar from "../Sidebar/VerticalSidebar";
import HorizontalNavbar from "../Sidebar/HorizontalNavbar";
import homepageCss from "./homepage.css/homepage.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid p-0"
      style={{
        background: "black",
        height: "100vh",
        maxWidth: "1440px",
        width: "100%",
      }}
    >
      <div className="d-flex">
        <VerticalSidebar />
        <div style={{ width: "78%" }}>
          <HorizontalNavbar />
          <div className="m-5 text-white d-block">
            <div className="d-flex justify-content-start">
              {/* ***************CARD ONE ****************** */}
              <div className={homepageCss.btnContainer}>
                <button
                  className={homepageCss.leaqueBtn}
                  onClick={() => {
                    navigate(`/auth/activeleaque`);
                  }}
                >
                  <h5 className={homepageCss.heading}>Total Laeque</h5>
                  <h4 className={homepageCss.number}>15</h4>
                </button>
              </div>

              {/* ***************CARD TWO ****************** */}
              <div className={homepageCss.btnContainer}>
                <button
                  className={homepageCss.leaqueBtn}
                  onClick={() => {
                    // handleUpcoming();
                    navigate(`/auth/upcomingleaque`);
                  }}
                >
                  <h5 className={homepageCss.heading}>Ongoing Leaque</h5>
                  <h4 className={homepageCss.number}>15</h4>
                </button>
              </div>

              {/* ***************CARD THREE ****************** */}
              <div className={homepageCss.btnContainer}>
                <button
                  className={homepageCss.leaqueBtn}
                  onClick={() => {
                    navigate(`/auth/pastleaque`);
                  }}
                >
                  <h5 className={homepageCss.heading}>Past Laeque</h5>
                  <h4 className={homepageCss.number}>15</h4>
                </button>
              </div>
            </div>
            {/* ***************CARD FOUR ****************** */}
            <div className={homepageCss.btnContainer}>
              <button className={homepageCss.leaqueBtn}>
                <h5 className={homepageCss.heading}>Total Players Joined</h5>
                <h4 className={homepageCss.number}>15</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
