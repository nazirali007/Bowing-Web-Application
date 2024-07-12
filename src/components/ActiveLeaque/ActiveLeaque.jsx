import React, { useEffect, useState } from "react";
import activeLeaqueCSS from "./ActiveLeque.Css/ActiveLeaque.module.css";
import TableComponents from "./TableComponents";
import CreateLeaque from "../../assets/images/NewLeaque.png";
import VerticalSidebar from "../Sidebar/VerticalSidebar";
import HorizontalNavbar from "../Sidebar/HorizontalNavbar";
import axios from "axios";
// import { Url } from "../../variable";

const ActiveLeaque = () => {
  const [data, setData] = useState();

  // console.log("try k bhr");

  const api = async () => {
    console.log("try k andr");
    try {
      const res = "apiDedo";
      // await axios.get(`/api/v1/league/alley/active/league`);
      console.log("=>dobara mat poochan=>", res);
      // setData(res);
    } catch (error) {
      console.log(error.message);
      // error.message;
    }
  };
  console.log(data);

  useEffect(() => {
    api();
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
                <div className={activeLeaqueCSS.tableHeader}>
                  <div className={activeLeaqueCSS.headerLeft}>
                    My Leaque &nbsp;
                    <i className="fa-solid fa-angle-right"></i>
                    &nbsp;
                    <span className={activeLeaqueCSS.headerspanTag}>
                      Active
                    </span>
                  </div>
                  <div className={activeLeaqueCSS.tableButton}>
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
                  {/* {data && ( */}
                  <TableComponents
                  // data={data}
                  />
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveLeaque;
