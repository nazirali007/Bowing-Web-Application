import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import { Url } from "../../variable";
import axios from "axios";

const DropdownComponent = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("api hit k upr");
    try {
      const res = await axios.get(`/alley/sign/out`);
      console.log(res);
      if (res.data.success) {
        navigate(`/auth/signin`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="dropdown me-5">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        User Name
      </button>
      <ul
        className="dropdown-menu me-5"
        style={{
          color: "green",
          width: "5px",
          marginRight: "50px",
          cursor: "pointer",
        }}
      >
        <li
          className="px-2"
          onClick={() => {
            navigate(`/myprofile`);
          }}
        >
          <i className="fa-solid fa-user me-3 "></i>
          My Profile
        </li>
        <li className="px-2" onClick={() => handleLogout()}>
          <AiOutlineLogout style={{ marginRight: "1rem" }} />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default DropdownComponent;
