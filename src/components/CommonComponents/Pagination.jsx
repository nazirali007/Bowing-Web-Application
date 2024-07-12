import React from "react";

const PaginationComponent = () => {
  return (
    <div
      className="d-flex justify-content-end "
      style={{
        marginTop: "1rem",
      }}
    >
      <nav aria-label="Page navigation example bg-dark">
        <ul
          className="pagination  bg-dark"
          style={{
            backgroundColor: "black",
          }}
        >
          <li className="page-item bg-black">
            <a
              className="page-link bg-dark text-white"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item ">
            <a className="page-link bg-dark text-white" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link bg-dark text-white" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link bg-dark text-white" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link bg-dark text-white"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationComponent;
