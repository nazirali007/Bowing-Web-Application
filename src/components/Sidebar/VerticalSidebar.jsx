import { useState } from "react";
// import Alert from "react-bootstrap/Alert";
import logoImg from "../../assets/images/logo.png";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiBowlingStrike } from "react-icons/gi";
import { MdOutlinePayments } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import sidebarstyle from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

function VerticalSidebar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        className="d-lg-none"
        onClick={handleShow}
        style={{ height: "3.5rem" }}
      >
        <i className="fa-solid fa-bars fs-3"></i>
      </Button>

      {/* <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert> */}

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        style={{
          minWidth: "180px",
          width: "22%",
          minHeight: "100vh",
          boxSizing: "border-box",
          background:
            "linear-gradient(90deg, rgba(22,21,21,1) 100%, rgba(38,37,37,1) 100%) ",
        }}
      >
        <Offcanvas.Body>
          <div className="mt-2">
            <div className={sidebarstyle.sidebarHeader}>
              <img
                src={logoImg}
                alt="logo"
                style={{ height: "2.5rem", marginRight: "1rem" }}
              />

              <p
                style={{
                  marginTop: "1.4rem",
                }}
              >
                Pocket Leaque
              </p>
            </div>
            <div className={sidebarstyle.sidebarContent}>
              <ul>
                <li
                  className={sidebarstyle.sidebarContent}
                  onClick={() => {
                    navigate(`/dashboard`);
                  }}
                >
                  <BsSpeedometer2 />
                  <span className={sidebarstyle.sspan}>Dashboard</span>
                </li>
                <li
                  className={sidebarstyle.sidebarContent}
                  onClick={() => {
                    navigate(`/myprofile`);
                  }}
                >
                  <i class="fa-sharp fa-light fa-bowling-ball-pin"></i>
                  <GiBowlingStrike />
                  <span className={sidebarstyle.sspan}>Intractive</span>
                  <FaAngleDown />
                </li>
                <li className={sidebarstyle.sidebarContent}>
                  <i className="fa-solid fa-user "></i>
                  <span className={sidebarstyle.sspan}>Players</span>
                </li>
                <li className={sidebarstyle.sidebarContent}>
                  <MdOutlinePayments />
                  <span className={sidebarstyle.sspan}>Payment Settings</span>
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default VerticalSidebar;
