import React from "react";

const AlertComponent = (props) => {
  // console.log(props);
  return (
    <div
      style={{ background: "transparent", border: "none", maxHeight: "30px" }}
    >
      <div
        className={`alert alert-${props.type} alert-dismissible fade show`}
        role="alert"
      >
        {props.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default AlertComponent;
