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
// import { Url } from "../../variable";
import logoImg from "../../assets/images/logo.png";
import bgImg from "../../assets/images/background.png";
import AlertComponent from "../CommonComponents/AlertComponent";
import OTPInput from "react-otp-input";
import { Url } from "../../variable";

const OTPVerification = () => {
  const navigate = useNavigate();
  const { emailId } = useParams();
  const [otp, setOtp] = useState("");
  const [alert, setAlert] = useState(null);
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
    console.log("otp=>", otp);
    // Make API call to verify the OTP
    try {
      const res = await axios.post(
        `${Url}/alley/password/otp/verify/${emailId}`,
        {
          verifyOTP: otp,
        }
      );
      if (res.data.success) {
        showAlert("OTP Verify Successfully", "success");
        setTimeout(() => {
          navigate(`/auth/resetpassword/${emailId}`);
        }, 3000);
      } else {
        showAlert("Email doses not exist", "danger");
      }

      setOtp("");
    } catch (error) {
      console.log(error.message);
    }
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
            className="overflow-hidden blink mt-5 border border-success"
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
              </Col>
            </Row>
            {/* </div> */}
            <AlertComponent message={alert?.msg} type={alert?.type} />
            <CardBody className=" my-0 pt-0">
              <div className="px-2">
                <Form className="form-horizontal " onSubmit={handleSubmit}>
                  <div className="mb-3 d-flex justify-content-center">
                    <div>
                      <Label
                        className="form-label fs-3 ms-3"
                        style={{ color: "white" }}
                      >
                        Enter 4 Digit Code
                      </Label>

                      <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => (
                          <input
                            {...props}
                            style={{
                              height: "3rem",
                              width: "3.2rem",
                              textAlign: "center",
                              fontSize: "20px",
                              opacity: "1",
                              backgroundImage:
                                "linear-gradient(90deg, rgba(128,128,128,0.9808298319327731) 22%, rgba(63,64,63,0.9864320728291317) 98%) ",
                              color: "white",
                              borderRadius: "5px",
                              marginLeft: "0.7rem",
                              marginRight: "0.7rem",
                            }}
                          />
                        )}
                        style={{
                          opacity: "1",
                          backgroundImage:
                            "linear-gradient(90deg, rgba(128,128,128,0.9808298319327731) 22%, rgba(63,64,63,0.9864320728291317) 98%) ",
                          color: "white",
                        }}
                      />
                    </div>
                  </div>
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
                      Verify
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>

          {/* *********** outside the cart Otp section********** */}

          <div className="mt-5 text-center">
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

export default OTPVerification;
