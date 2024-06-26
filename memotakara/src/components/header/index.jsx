import "../../main.css";
import "./index.css";
import logo from "../../img/logo.png";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const [active, setActive] = useState("");
  const user = localStorage.getItem("username");
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="header_max">
      <div class="header_container">
        <Link to="/home" className="header_link" onClick={() => setActive("")}>
          <div class="header_logo">
            <img loading="lazy" src={logo} alt="logo" class="img" />
            <div class="header_name">MemeTakara</div>
          </div>
        </Link>
        <div class="header_tab">
          {!user ? (
            <>
              <button class="header_sign_up">
                <Link
                  className={`header_link ${
                    active === "sign_up" ? "header_active" : ""
                  }`}
                  to="/sign_up"
                  onClick={() => setActive("sign_up")}
                >
                  Sign up
                </Link>
              </button>

              <button class="header_login">
                <Link
                  className={`header_link ${
                    active === "login" ? "header_active" : ""
                  }`}
                  to="/login"
                  onClick={() => setActive("login")}
                >
                  Login
                </Link>
              </button>
            </>
          ) : (
            <>
              <button class="header_login">
                <Link
                  to="/activity_list"
                  className={`header_link ${
                    active === "activity" ? "header_active" : ""
                  }`}
                  onClick={() => setActive("activity")}
                >
                  Hoạt động
                </Link>
              </button>

              <button class="header_login">
                <Link
                  className={`header_link ${
                    active === "target" ? "header_active" : ""
                  }`}
                  onClick={() => setActive("target")}
                  to="/define_goal"
                >
                  Mục tiêu KPI
                </Link>
              </button>
              <button class="header_login">
                <Link
                  to="/kpi_status"
                  className={`header_link ${
                    active === "status" ? "header_active" : ""
                  }`}
                  onClick={() => setActive("status")}
                >
                  Trạng thái KPI
                </Link>
              </button>
              <button class="header_login" id="header_avatar">
                <Link
                  className="header_link"
                  to="/setting/account"
                  onClick={() => setActive("")}
                >
                  <Avatar
                    size="large"
                    style={{
                      backgroundColor: "#ffff",
                      border: "3px solid #0000",
                    }}
                    icon={
                      <UserOutlined
                        style={{
                          color: "#166dba",
                        }}
                      />
                    }
                  />
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
      {/* {user && (
        <div className="header_mobile">
          {location.pathname === "/home" ? (
            <div className="header_mobile_logo">
              <Link className="header_link" to="/home">
                <h3 className="header_mobile_name">MemoTakara</h3>
              </Link>
            </div>
          ) : (
            <>
              <div className="header_mobile_back">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  onClick={() => navigate(-1)}
                />
              </div>
              <div className="header_mobile_name_page">{props.name}</div>
            </>
          )}
          <div className="header_mobile_avatar">
            <Link className="header_link" to="/setting/account">
              <Avatar
                size="large"
                icon={
                  <UserOutlined alt="avatar" className="header_mobile_ava" />
                }
              />
            </Link>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Header;
