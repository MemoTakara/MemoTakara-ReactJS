import "./index.css";
import google_icon from "../../../img/google_icon.png";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IdcardFilled, LockFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Form, Input, Button, Checkbox, message } from "antd";

function SignUp() {
  //message
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const openSignupMessage = () => {
    const key = "updatable";
    messageApi.loading({ content: "Loading...", key });
    setTimeout(() => {
      messageApi.success({ content: "Sign Up Success!", key, duration: 2 });
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Thời gian chờ để hiển thị thông báo trước khi chuyển hướng
    }, 1000);
  };

  return (
    <div className="sign_up_container">
      <div className="sign_up_header">Sign up in less than 2 minutes.</div>
      <div className="sign_up_form">
        <Form
          layout="horizontal"
          style={{
            width: 400,
          }}
          onFinish={openSignupMessage}
        >
          {/* username */}
          <Form.Item
            label={
              <IdcardFilled
                className="sign_up_icon"
                style={{
                  fontSize: 25,
                }}
              />
            }
            name="username"
            rules={[
              {
                message: "Enter your username!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          {/* pass */}
          <Form.Item
            name="password"
            label={
              <LockFilled
                className="sign_up_icon"
                style={{
                  fontSize: 24,
                }}
              />
            }
            rules={[
              {
                message: "Enter your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          {/* re-enter pass */}
          <Form.Item
            name="re_enter_password"
            label={
              <LockFilled
                className="sign_up_icon"
                style={{
                  fontSize: 24,
                }}
              />
            }
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                message: "Re-enter password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Re-entered password is incorrect!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Re-enter password" />
          </Form.Item>

          <Form.Item style={{ textAlign: "center", marginLeft: "10px" }}>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>OR</div>
          </Form.Item>

          {/* google */}
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" shape="round" className="sign_up_btn">
              <img
                src={google_icon}
                alt="Google Icon"
                style={{ width: "14px", height: "14px" }}
              />
              <div style={{ fontSize: "16px" }}>Continue with Google</div>
            </Button>
          </Form.Item>

          {/* facebook */}
          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="primary"
              shape="round"
              className="sign_up_btn"
              icon={
                <FontAwesomeIcon
                  style={{ color: "#1877F2" }}
                  icon={faFacebook}
                />
              }
            >
              <div style={{ fontSize: "16px" }}>Continue with Facebook</div>
            </Button>
          </Form.Item>

          {/* checkbox */}
          <Form.Item style={{ textAlign: "center" }}>
            <Checkbox style={{ fontSize: "16px" }}>
              I agree to{" "}
              <span
                style={{
                  fontWeight: "var(--header-weight-size)",
                  textDecoration: "underline",
                }}
              >
                Terms of Service
              </span>{" "}
              and{" "}
              <span
                style={{
                  fontWeight: "var(--header-weight-size)",
                  textDecoration: "underline",
                }}
              >
                Privacy Policy.
              </span>
            </Checkbox>
          </Form.Item>

          {/* sign up */}
          <Form.Item style={{ textAlign: "center" }}>
            {contextHolder}
            <Button
              type="primary"
              className="sign_up_btn_signup"
              onClick={openSignupMessage}
            >
              SIGN UP
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* login */}
      <div className="switch_to_login" style={{ fontSize: "18px" }}>
        Already have account?
        <span>
          <Link
            className="sign_up_link"
            to="/login"
            style={{ textDecoration: "underline" }}
          >
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SignUp;
