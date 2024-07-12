import React, { useEffect, useState } from "react";
import VerticalSidebar from "../Sidebar/VerticalSidebar";
import HorizontalNavbar from "../Sidebar/HorizontalNavbar";
import TableComponents from "../ActiveLeaque/TableComponents";
import CreateLeaque from "../../assets/images/NewLeaque.png";
import PastLeaqueCss from "./PastLeaque.CSS/PastLeaque.module.css";
import axios from "axios";
import { Url } from "../../variable";

const PastLeaque = () => {
  const [data, setData] = useState();
  const [editbtn, setEditbtn] = useState(false);
  const handleUpcoming = async () => {
    // console.log("try k andr");
    try {
      const res = "pastApi";
      await axios.get(`${Url}/league/alley/past/league`);
      console.log("=>past daal do=>", res.data.alleyLeagues);
      setData(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    handleUpcoming();
  }, []);
  return (
    <div
      className="container-fluid p-0"
      style={{
        background: "black",
        // height: "100%",
        maxWidth: "1440px",
        width: "100%",
      }}
    >
      <div className="d-flex">
        <VerticalSidebar />
        <div style={{ width: "78%" }}>
          <HorizontalNavbar />
          <div className="m-5 text-white d-block">
            <div className="d-flex justify-content-center">
              <div className="card" style={{ width: "95%" }}>
                <div className={PastLeaqueCss.tableHeader}>
                  <div className={PastLeaqueCss.headerLeft}>
                    My Leaque &nbsp;
                    <i className="fa-solid fa-angle-right"></i>
                    &nbsp;
                    <span className={PastLeaqueCss.headerspanTag}>
                      Ended Laeque
                    </span>
                  </div>
                  <div className={PastLeaqueCss.tableButton}>
                    <img src={CreateLeaque} alt="logo" className="pb-1" />
                    &nbsp;
                    <button
                      style={{
                        border: "none",
                        background: "transparent",
                        color: "white",
                      }}
                    >
                      Create New Leaque
                    </button>
                  </div>
                </div>
                <div>
                  <TableComponents
                  data={data} editbtn={editbtn}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastLeaque;
