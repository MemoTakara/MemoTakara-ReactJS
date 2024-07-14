import "./index.css";
import google_icon from "../../img/google_icon.png";
import ig_icon from "../../img/ig_icon.png";
import logo from "../../img/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { LinkedinFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [active, setActive] = useState("");
  const user = localStorage.getItem("username");

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
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            Subscribe to get information, latest news and other interesting
            offers about{" "}
            <span style={{ fontFamily: "var(--logo-font)" }}>MemoTakara</span>!
          </div>
          <div className="footer_email_send">
            <Input
              style={{
                width: "200px",
                fontWeight: "545",
                border: "2px solid var(--color-light-button)",
              }}
              placeholder="enter your email"
            />
            <button
              style={{
                fontSize: "16px",
                fontWeight: "545",
                padding: "10px 25px",
                marginLeft: "15px",
              }}
            >
              Subscribe
            </button>
          </div>
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
        <div
          style={{ width: "550px", height: "1px", background: "#000" }}
        ></div>
        <div className="footer_copyright">
          © Copyright <span style={{ fontStyle: "italic" }}>cuhp293</span> 2024
        </div>

        <div className="footer_contact">
          {/* google */}
          <div>
            <img
              src={google_icon}
              alt="Google Icon"
              style={{
                width: "27px",
                height: "30px",
                paddingTop: "4px",
                cursor: "pointer",
              }}
            />
          </div>

          {/* facebook */}
          <div>
            <FontAwesomeIcon
              style={{
                fontSize: "28px",
                color: "#1877F2",
                paddingLeft: "15px",
                paddingRight: "12px",
                cursor: "pointer",
              }}
              icon={faFacebook}
            />
          </div>

          {/* instagram */}
          <div>
            <img
              src={ig_icon}
              alt="Instagram Icon"
              style={{
                width: "30px",
                height: "34px",
                paddingTop: "3px",
                cursor: "pointer",
              }}
            />
          </div>

          {/* LinkedIn */}
          <div>
            <LinkedinFilled
              style={{
                fontSize: "30px",
                color: "#2867B2",
                paddingLeft: "12px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        <div
          style={{ width: "550px", height: "1px", background: "#000" }}
        ></div>
      </div>
    </div>
  );
}

export default Footer;
