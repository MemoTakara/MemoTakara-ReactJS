import "./index.css";
import logo from "../../img/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AutoComplete, Input, Badge, Popconfirm, Select } from "antd";
import {
  UserOutlined,
  BellOutlined,
  FireOutlined,
  BookOutlined,
} from "@ant-design/icons";
import HeaderSet from "../btn/btn-header-set";

// Search bar
const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

//Language
const handleLanguage = (value) => {
  console.log(`selected ${value}`);
};

function Header(props) {
  const [active, setActive] = useState("");
  const user = localStorage.getItem("username");

  //Search bar
  const [optionsSearch, setOptionsSearch] = useState([]);
  const handleSearch = (value) => {
    setOptionsSearch(value ? searchResult(value) : []);
  };
  const onSelectSearch = (value) => {
    console.log("onSelectSearch", value);
  };

  //Notifications
  const [notis, setNotis] = useState([
    {
      id: 0,
      visible: false,
      icon: <FireOutlined style={{ color: "red" }} />,
      title: "Way to go! You’re on a 50-day streak.",
      description: "Keep up the momentum and study again.",
      time: "2 hours ago",
    },
    {
      id: 1,
      visible: false,
      icon: <BookOutlined style={{ color: "#166dba" }} />,
      title: "Can you master the set Computer virus in learn mode?",
      description: "Find out!",
      time: "1 day ago",
    },
  ]);
  const toggleNoti = (id) => {
    setNotis(
      notis.map((noti) =>
        noti.id === id ? { ...noti, visible: !noti.visible } : noti
      )
    );
  };
  const [showNotifications, setShowNotifications] = useState(false);
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="header_max">
      <div class="header_container">
        {!user ? (
          <>
            <div className="header_set">
              <Link
                to="/"
                className="header_link"
                onClick={() => setActive("")}
              >
                <div className="header_logo">
                  <img loading="lazy" src={logo} alt="logo" class="img" />
                  <div class="header_name">MemoTakara</div>
                </div>
              </Link>

              <Link
                to="/"
                className="header_link"
                onClick={() => setActive("")}
              >
                <HeaderSet
                  defaultText="Home"
                  isActive={active === ""}
                  onClick={() => setActive("")}
                />
              </Link>

              <Link
                to="/"
                className="header_link"
                onClick={() => setActive("")}
              >
                <HeaderSet
                  defaultText="About us"
                  isActive={active === ""}
                  onClick={() => setActive("")}
                />
              </Link>
            </div>

            <div className="header_tab">
              <AutoComplete
                popupMatchSelectWidth={252}
                style={{
                  width: 360,
                }}
                options={optionsSearch}
                onSelect={onSelectSearch}
                onSearch={handleSearch}
                size="medium"
              >
                <Input.Search
                  size="medium"
                  placeholder="Search standard collection"
                  enterButton
                />
              </AutoComplete>

              <Link
                className={`header_link ${
                  active === "sign_up" ? "header_start_active" : ""
                }`}
                to="/sign_up"
                onClick={() => setActive("sign_up")}
              >
                <button className="header_start">Sign up</button>
              </Link>

              <Link
                className={`header_link ${
                  active === "login" ? "header_start_active" : ""
                }`}
                to="/login"
                onClick={() => setActive("login")}
              >
                <button className="header_start">Login</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="header_set">
              <Link
                to="/dashboard"
                className="header_link"
                onClick={() => setActive("dashboard")}
              >
                <div className="header_logo">
                  <img loading="lazy" src={logo} alt="logo" class="img" />
                  <div class="header_name">MemoTakara</div>
                </div>
              </Link>

              <Link
                to="/dashboard"
                className={`header_link ${
                  active === "dashboard" ? "header_active" : ""
                }`}
                onClick={() => setActive("dashboard")}
              >
                <HeaderSet
                  defaultText="Home"
                  isActive={active === "dashboard"}
                  onClick={() => setActive("dashboard")}
                />
              </Link>

              <Link
                className={`header_link ${
                  active === "study_sets" ? "header_active" : ""
                }`}
                onClick={() => setActive("study_sets")}
                to="/study_sets"
              >
                <HeaderSet
                  defaultText="Study Sets"
                  isActive={active === "study_sets"}
                  onClick={() => setActive("study_sets")}
                />
              </Link>

              <Link
                to="/statistics"
                className={`header_link ${
                  active === "statistics" ? "header_active" : ""
                }`}
                onClick={() => setActive("statistics")}
              >
                <HeaderSet
                  defaultText="Statistics"
                  isActive={active === "statistics"}
                  onClick={() => setActive("statistics")}
                />
              </Link>
            </div>

            <div className="header_tab">
              <AutoComplete
                popupMatchSelectWidth={252}
                style={{
                  width: 360,
                }}
                options={optionsSearch}
                onSelect={onSelectSearch}
                onSearch={handleSearch}
                size="medium"
              >
                <Input.Search
                  size="medium"
                  placeholder="Search standard collection"
                  enterButton
                />
              </AutoComplete>

              <Select
                defaultValue="English"
                style={{
                  width: 120,
                  height: 40,
                  border: "2.4px solid var(--color-light-button)",
                  borderRadius: "7px",
                }}
                onChange={handleLanguage}
                options={[
                  {
                    value: "Vietnamese",
                    label: "Vietnamese",
                  },
                  {
                    value: "English",
                    label: "English",
                    disabled: true,
                  },
                ]}
              />

              <div>
                <div
                  id="header_noti_container"
                  onClick={() => toggleNotifications()}
                >
                  <Badge
                    size="small"
                    count={notis.filter((noti) => !noti.visible).length}
                  >
                    <BellOutlined id="header_bell" />
                  </Badge>
                </div>
                {/* {notis.map((noti) =>
                  noti.visible ? (
                    <div className="header_noti" key={noti.id}>
                      <Popconfirm
                        placement="bottomRight"
                        icon={noti.icon}
                        title={noti.title}
                        description={noti.description}
                        okText="Yes"
                        cancelText="No"
                        cancelButtonProps={{ style: { display: "none" } }}
                        onConfirm={() => toggleNoti(noti.id)} // Đóng thông báo khi confirm
                      />
                    </div>
                  ) : (
                    <div className="noti_null">Everything is up to date!</div>
                  )
                )} */}
                {showNotifications && (
                  <div className="header_notifications">
                    {notis.map((noti) =>
                      noti.visible ? (
                        <div className="header_noti" key={noti.id}>
                          <Popconfirm
                            placement="bottomRight"
                            icon={noti.icon}
                            title={noti.title}
                            description={noti.description}
                            okText="Yes"
                            cancelText="No"
                            cancelButtonProps={{ style: { display: "none" } }}
                            onConfirm={() => toggleNoti(noti.id)}
                          />
                          <div className="noti_time">{noti.time}</div>
                        </div>
                      ) : (
                        <div className="noti_null">
                          Everything is up to date!
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              <Link
                className="header_link"
                id="header_avatar"
                to="/settings"
                onClick={() => setActive("")}
              >
                <UserOutlined id="user_logo" />
                <div className="username">{user}</div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
