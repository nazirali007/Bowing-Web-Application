import React from "react";

const FormProfile = () => {
  return (
    <div>
      <form className="my-4">
        <div className=" border border-secondary rounded px-3">
          <legend>Admin Personal Information</legend>
          <div className="d-flex justify-content-start">
            <div className="mb-3" style={{ width: "40%", marginRight: "2rem" }}>
              <label htmlFor="disabledTextInput" className="form-label">
                Frist Name
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control shadow-none"
                placeholder="First Name"
              />
            </div>
            <div className="mb-3" style={{ width: "40%", marginRight: "2rem" }}>
              <label htmlFor="disabledTextInput" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control shadow-none"
                placeholder="Enter Mobile No"
              />
            </div>
          </div>
          <div className="d-flex justify-content-start">
            <div
              className="mb-3 "
              style={{ width: "40%", marginRight: "2rem" }}
            >
              <label htmlFor="disabledTextInput" className="form-label">
                Mobile-No
              </label>
              <input
                type="number"
                id="disabledTextInput"
                className="form-control shadow-none"
                placeholder="First Name"
              />
            </div>
            <div className="mb-3" style={{ width: "40%", marginRight: "2rem" }}>
              <label htmlFor="disabledTextInput" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="disabledTextInput"
                className="form-control shadow-none"
                placeholder="Enter Mobile No"
              />
            </div>
          </div>
        </div>
        <button
          className="border border-0 mt-2 py-2 px-4 rounded text-white "
          style={{ background: "#a5d162", marginLeft: "20rem" }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default FormProfile;
