import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
// import DropdownComponent from "./ButtonDropdown";
// import { ButtonDropdown } from "reactstrap";
import DropdownComponent from "./DropdownComponent";

const HorizontalNavbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary p-0"
        style={{ width: "100%" }}
        id="myNav"
      >
        <div
          className="container-fluid"
          style={{
            background:
              "linear-gradient(90deg, rgba(48,48,48,0.9808298319327731) 22%, rgba(4,11,2,0.9864320728291317) 98%)",
            height: "4rem",
          }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <form className="d-flex justify-content-center" role="search">
            <input
              className="form-control me-2 shadow-none"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                background:
                  "linear-gradient(90deg, rgba(48,48,48,0.9808298319327731) 22%, rgba(4,11,2,0.9864320728291317) 98%)",
              }}
            />
            {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          </form>
          <div className="d-flex justify-content-end">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i
                      className="fa-regular fa-envelope me-3 fs-4"
                      style={{ color: "white" }}
                    ></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i
                      className="fa-regular fa-bell me-3 fs-4"
                      style={{ color: "white" }}
                    ></i>
                  </a>
                </li>

                <DropdownComponent />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HorizontalNavbar;
