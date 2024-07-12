import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { LuKey } from "react-icons/lu";
// import { AiFillEyeInvisible } from "react-icons/ai";
// import { Url } from "../../variable";
import logoImg from "../../assets/images/logo.png";
import bgImg from "../../assets/images/background.png";
import AlertComponent from "../CommonComponents/AlertComponent";
import { Url } from "../../variable";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { emailId } = useParams();
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(null);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password === ConfirmPassword) {
        const res = await axios.post(`${Url}/alley/password/reset/${emailId}`, {
          password: password,
          confirmPassword: ConfirmPassword,
        });

        console.log(res);
        if (res?.status === 200) {
          showAlert("Your Password Successfull Changed", "success");
          setPassword("");
          setConfirmPassword("");
          navigate("/auth/signin");
        }
      } else {
        showAlert("Password does not match", "danger");
      }
    } catch (error) {
      showAlert(error.message, "danger");
      console.log(error);
    }
  };
  const togglePassword1 = () => {
    setShow1(!show1);
  };
  const togglePassword2 = () => {
    setShow2(!show2);
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        height: "auto",
        overflow: "auto",
      }}
    >
      <Row className="d-flex justify-content-center align-items-center pt-5">
        <Col md={6} sm={8} lg={4}>
          <Card
            className="overflow-hidden blink mt-2 border border-success"
            style={{
              background:
                " linear-gradient(90deg, rgba(22,38,0,0.9808298319327731) 11%, rgba(0,9,0,0.9864320728291317) 98%)",
              borderRadius: "10px",
            }}
          >
            {/* <div className="bg-transparent"> */}
            <Row>
              <Col className="col-12  ">
                <div className="d-flex justify-content-center mt-4">
                  <div>
                    <img
                      className="ms-5"
                      style={{ width: "5rem", height: "4rem" }}
                      src={logoImg}
                      alt="image"
                      height="34"
                    />
                    <p
                      className="fs-3 fw-medium my-0"
                      style={{ color: "white" }}
                    >
                      Pocket Leaque
                    </p>
                    <p className="ms-2 my-0" style={{ color: "green" }}>
                      Unite Through Gaming
                    </p>
                  </div>
                </div>

                <b
                  className="my-0"
                  style={{ color: "white", marginLeft: "2rem" }}
                >
                  Reset Password
                </b>
              </Col>
            </Row>
            {/* </div> */}
            <AlertComponent message={alert?.msg} type={alert?.type} />
            <CardBody className=" my-0 pt-0">
              <div className="px-2">
                <Form className="form-horizontal" onSubmit={handleSubmit}>
                  <div className="mb-3" style={{ position: "relative" }}>
                    <Label className="form-label" style={{ color: "white" }}>
                      Password
                    </Label>

                    {/* input tag reset password */}
                    <div
                      className="d-flex"
                      style={{
                        border: "0",
                        opacity: "1",
                        backgroundImage:
                          "linear-gradient(90deg, rgba(128,128,128,0.9808298319327731) 22%, rgba(63,64,63,0.9864320728291317) 98%) ",
                        borderRadius: "6px",
                        border: "1px solid white",
                      }}
                    >
                      <div
                        className="mx-3 fs-5 pt-1"
                        style={{ color: "white" }}
                      >
                        <LuKey />
                      </div>

                      <Input
                        id="password"
                        name="password"
                        className="form-control shadow-none"
                        placeholder="Enter Your Password"
                        type={show1 ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                          border: "0",
                          opacity: "1",
                          padding: "2% 4% 2% 0%",
                          backgroundImage:
                            "linear-gradient(90deg, rgba(128,128,128,0.9808298319327731) 22%, rgba(63,64,63,0.9864320728291317) 98%) ",
                          color: "white",
                        }}
                      />
                      <span
                        id="addon-wrapping"
                        onClick={togglePassword1}
                        style={{
                          marginTop: "0.4rem",
                          marginRight: "0.3rem",
                          textAlign: "center",
                          backgroundColor: "transparent",
                          fontSize: "17px",
                          color: "white",
                        }}
                      >
                        {show1 ? (
                          <i className="fa-solid fa-eye-slash"></i>
                        ) : (
                          <i className="fa-solid fa-eye"></i>
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="mb-3" style={{ position: "relative" }}>
                    <Label className="form-label" style={{ color: "white" }}>
                      Confirm Password
                    </Label>

                    {/* confirm password input box */}

                    <div
                      className="d-flex"
                      style={{
                        border: "0",
                        opacity: "1",
                        backgroundImage:
                          "linear-gradient(90deg, rgba(128,128,128,0.9808298319327731) 22%, rgba(63,64,63,0.9864320728291317) 98%) ",
                        borderRadius: "6px",
                        border: "1px solid white",
                      }}
                    >
                      <div
                        className="mx-3 fs-5 pt-1"
                        style={{ color: "white" }}
                      >
                        <LuKey />
                      </div>

                      <Input
                        id="confrim-password"
                        name="password"
                        className="form-control shadow-none"
                        placeholder="Re-Enter Your Password"
                        type={show2 ? "text" : "password"}
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{
                          border: "0",
                          opacity: "1",
                          padding: "2% 4% 2% 0%",
                          backgroundImage:
                            "linear-gradient(90deg, rgba(128,128,128,0.9808298319327731) 22%, rgba(63,64,63,0.9864320728291317) 98%) ",
                          color: "white",
                        }}
                      />
                      <span
                        id="addon-wrapping"
                        onClick={togglePassword2}
                        style={{
                          marginTop: "0.4rem",
                          marginRight: "0.3rem",
                          textAlign: "center",
                          backgroundColor: "transparent",
                          fontSize: "17px",
                          color: "white",
                        }}
                      >
                        {show2 ? (
                          <i className="fa-solid fa-eye-slash"></i>
                        ) : (
                          <i className="fa-solid fa-eye"></i>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* ***************** submit button ***************** */}
                  <div className="mt-4">
                    <Button
                      className="btn btn-block bottom-button"
                      type="submit"
                      style={{
                        backgroundColor: "#6fbe44",
                        color: "white",
                        width: "80%",
                        height: "50px",
                        float: "left",
                        margin: "3% 10%",
                        padding: "1% 1%",
                        borderRadius: "10px",
                        border: "5px solid rgb(6, 97, 6)",
                        borderTop: "0",
                        borderLeft: "0",
                        borderRight: "0",
                        fontSize: "1.2em",
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>

          {/* *********** outside the cart login section********** */}

          <div className="mt-4 text-center">
            <p style={{ color: "white" }}>
              Already have an account ?
              <Link
                to="/auth/signin"
                className="font-weight-medium text-primary"
              >
                Login
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResetPassword;
