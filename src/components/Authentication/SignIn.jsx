import React, { useState } from "react";
import signCss from "./auth.module.css";
import plLogo from "../../assets/images/logo.png";
import { IoMailOutline } from "react-icons/io5";
import { RiKey2Line } from "react-icons/ri";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
  Alert,
} from "reactstrap";
import { AiFillEye } from "react-icons/ai";
import { withRouter, Link } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Url } from "../../variable";
import axios from "axios";
import AlertComponent from "../CommonComponents/AlertComponent";
import authCSS from "./auth.module.css";

// AiOutlineMail

const SignIn = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [passwordType, setPasswordType] = useState("password");
  const [alert, setAlert] = useState(null);

  const navigate = useNavigate();

  // handle submit api call
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("api ka andr");
      const response = await axios.post(`${Url}/alley/sign/in`, data);
      console.log(response.headers);
      if (response.data.success === true) {
        navigate("/dashboard");
      }
    } catch (error) {
      // console.log("galat hai credentials");
      showAlert("Something Went Wrong", "danger");
      setData("");
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      return setPasswordType("text");
    }
    setPasswordType("password");
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className={signCss.signInContainer}>
      <div className={signCss.signInCart}>
        <div className={signCss.signInCartTop}>
          <img src={plLogo} alt="Pocket League Logo" />
          <h2>Pocket League</h2>
          <h5>Unite Through Gaming</h5>
        </div>

        <AlertComponent message={alert?.msg} type={alert?.type} />

        <div className={signCss.signInCartBottom}>
          <form
            // action=""
            className="form-horizontal text-white"
            onSubmit={handleSubmit}
          >
            <h2>Sign In</h2>
            <div className={signCss.signInCartBottomInput}>
              <div className={signCss.signInCartBottomInputDiv}>
                <IoMailOutline />
              </div>
              <Input
                name="Email Id"
                className="form-control shadow-none"
                style={{
                  background: "transparent",
                  border: "0",
                  color: "white",
                }}
                placeholder="Enter Your Email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className={signCss.signInCartBottomInput}>
              <div className={signCss.signInCartBottomInputDiv}>
                <RiKey2Line />
              </div>
              <Input
                name="Password"
                className="form-control shadow-none"
                placeholder="Enter Your Password"
                type={passwordType}
                value={data.password}
                style={{
                  background: "transparent",
                  border: "0px",
                  color: "white",
                }}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <span
                className="input-group-text cursor-pointer fs-4 "
                id="addon-wrapping"
                onClick={togglePassword}
                style={{
                  backgroundColor: "transparent",
                  fontSize: "17px",
                  color: "white",
                  border: "0",
                }}
              >
                {passwordType === "text" ? (
                  <AiFillEyeInvisible />
                ) : (
                  <AiFillEye />
                )}
              </span>
              <br />
            </div>
            <div className={authCSS.forgotTextCSS}>
              <Link to="/auth/forgetpassword">Forgot password?</Link>
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
