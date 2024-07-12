import React from "react";
import FormProfile from "./FormProfile";
import cartStyle from "./MyStyle.module.css";

const CartProfile = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "90%" }}>
        <div className="card-header bg-secondary text-white">Alley Profile</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <div className={cartStyle.cartProfile} style={{ border: "grey" }}>
            <ul className={cartStyle.cartProfile}>
              <li>Account Settings</li>
              <li>Address</li>
              <li>Manage Password</li>
              <li>Payment Method</li>
              <li>Timing</li>
            </ul>
          </div>
          <FormProfile />
        </div>
      </div>
    </div>
  );
};

export default CartProfile;
