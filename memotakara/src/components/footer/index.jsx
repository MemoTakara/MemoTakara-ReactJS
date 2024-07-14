import "./index.css";
import google_icon from "../../img/google_icon.png";
import logo from "../../img/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, message, Input } from "antd";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [active, setActive] = useState("");
  const user = localStorage.getItem("username");

  //Send email
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const sendEmail = () => {
    messageApi.open({ key, type: "loading", content: "Loading..." });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Subscribed successfully!",
        duration: 2,
      });
    }, 1000);
  };

  return (
    <div class="footer_container">
      <div className="footer_cols">
        <div className="footer_logo_set">
          {!user ? (
            <Link to="/" className="footer_link" onClick={() => setActive("")}>
              <div className="footer_logo">
                <img loading="lazy" src={logo} alt="logo" class="img" />
                <div class="footer_name">MemoTakara</div>
              </div>
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="footer_link"
              onClick={() => setActive("")}
            >
              <div className="footer_logo">
                <img loading="lazy" src={logo} alt="logo" class="img" />
                <div class="footer_name">MemoTakara</div>
              </div>
            </Link>
          )}
        </div>

        <div className="footer_email">
          <div
            style={{
              marginBottom: "15px",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            Subscribe to get information, latest news and other interesting
            offers about{" "}
            <span style={{ fontFamily: "var(--logo-font)" }}>MemoTakara</span>!
          </div>

          <Form
            className="footer_email_send"
            autoComplete="on"
            onFinish={sendEmail}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Invalid email!",
                  required: true,
                },
              ]}
            >
              <Input
                style={{
                  width: "200px",
                  fontWeight: "545",
                  padding: "5.5px",
                  border: "2px solid var(--color-light-button)",
                }}
                placeholder="enter your email"
              />
            </Form.Item>

            <Form.Item>
              {contextHolder}
              <button
                style={{
                  fontSize: "16px",
                  fontWeight: "545",
                  padding: "7px 25px",
                  marginLeft: "15px",
                }}
                type="submit"
                htmlType="submit"
              >
                Subscribe
              </button>
            </Form.Item>
          </Form>
        </div>

        <div className="footer_support">
          <div
            style={{
              fontSize: "20px",
              textDecoration: "underline",
              fontWeight: "var(--header-weight-size)",
            }}
          >
            Support
          </div>
          <Link className="footer_link">About us</Link>
          <Link className="footer_link">Terms and Condition</Link>
          <Link className="footer_link">Help/FAQ</Link>
        </div>
      </div>

      <div class="footer_bottom_row">
        {/* line */}
        <div
          style={{ width: "550px", height: "1px", background: "#000" }}
        ></div>

        <div className="footer_copyright">
          © Copyright <span style={{ fontStyle: "italic" }}>cuhp293</span> 2024
        </div>

        <div className="footer_contact">
          {/* google */}
          <a href="mailto:phuchong292003@gmail.com">
            <img
              src={google_icon}
              alt="Google Icon"
              style={{
                width: "20px",
                height: "24px",
                paddingTop: "4px",
              }}
            />
          </a>

          {/* facebook */}
          <a
            href="https://www.facebook.com/cuhp293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
                color: "#1877F2",
                paddingLeft: "15px",
                paddingRight: "12px",
              }}
              icon={faFacebook}
            />
          </a>

          {/* github */}
          <a
            href="https://github.com/cuhp293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFilled
              style={{
                fontSize: "22px",
                color: "#000",
              }}
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/%C4%91inh-th%E1%BB%8B-h%E1%BB%93ng-ph%C3%BAc-1a922a216/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinFilled
              style={{
                fontSize: "22px",
                color: "#2867B2",
                paddingLeft: "12px",
              }}
            />
          </a>
        </div>

        {/* line */}
        <div
          style={{ width: "550px", height: "1px", background: "#000" }}
        ></div>
      </div>
    </div>
  );
}

export default Footer;
