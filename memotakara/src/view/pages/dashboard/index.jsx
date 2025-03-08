import "./index.css";
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Row, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  memoData,
  totalData,
  recentCollections,
  recommendCollections,
  popularCollections,
} from "../../../data/data.jsx";
import BtnBlue from "../../../components/btn/btn-blue.jsx";
import DashboardCard from "../../../components/dashboard_card/index.jsx";

function Dashboard() {
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const user = localStorage.getItem("username");

  //Tooltip
  const [arrow, setArrow] = useState("Show");
  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }
    if (arrow === "Show") {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  //Data
  const [collections, setCollections] = useState(memoData);
  const recommendList = recommendCollections.slice(0, 3);
  const popularList = popularCollections.slice(0, 3);

  return (
    <div className="dashboard_container">
      <Link //create new collection
        to="/create_collection"
        className="dashboard_link"
        onClick={() => setActive("")}
      >
        <Tooltip
          placement="bottomRight"
          title="Create new collection."
          arrow={mergedArrow}
        >
          <Button
            shape="circle"
            style={{
              height: "50px",
              width: "50px",
              marginBottom: "10px",
              background: "var(--color-button)",
            }}
            id="dashboard_btn"
            icon={<PlusOutlined style={{ color: "#fff", fontSize: "24px" }} />}
          />
        </Tooltip>
      </Link>

      <div className="dashboard_sayhi">
        <div id="dashboard_sayhi_text">
          Welcome back{" "}
          <Link
            to="/study_sets"
            className="dashboard_link"
            onClick={() => setActive("")}
            style={{
              fontStyle: "italic",
              fontSize: "24px",
              fontWeight: "var(--header-weight-size)",
            }}
          >
            @{user}
          </Link>
          {","}
          <br />
          <span style={{ fontSize: "24px" }}>
            Let's get started with your flashcards due today!
          </span>
        </div>

        <div className="dashboard_cards">
          <div className="dashboard_due">
            {totalData.due}
            <span
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "normal",
              }}
            >
              flashcards due
            </span>
          </div>

          <div className="dashboard_streak">
            50
            <span
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "normal",
              }}
            >
              days streak
            </span>
          </div>
        </div>
      </div>

      <div className="dashboard_recent">
        <div className="dashboard_title">
          <div className="dashboard_title_text">Recent</div>
          <Link //see more
            to="/create_collection"
            className="dashboard_link"
            onClick={() => setActive("")}
          >
            <BtnBlue defaultText="See more" />
          </Link>
        </div>

        {/* recent list */}
        <div style={{ padding: 20 }}>
          <Row gutter={[16, 16]}>
            {recentCollections.map((collection, index) => (
              <Col key={collection.id} xs={24} sm={12} md={8} lg={8} xl={8}>
                <div id="dashboard_recent_list_col">
                  <DashboardCard collections={[collection]} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="dashboard_recommend">
        <div className="dashboard_title">
          <div className="dashboard_title_text">
            Recommend by{" "}
            <span
              style={{
                fontStyle: "italic",
                fontSize: "24px",
                fontWeight: "var(--header-weight-size)",
              }}
            >
              @en120
            </span>
          </div>
          <Link //see more
            to="/create_collection"
            className="dashboard_link"
            onClick={() => setActive("")}
          >
            <BtnBlue defaultText="See more" />
          </Link>
        </div>

        {/* recommend list */}
        <div style={{ padding: 20 }}>
          <Row gutter={[16, 16]}>
            {recommendList.map((collection, index) => (
              <Col key={collection.id} xs={24} sm={12} md={8} lg={8} xl={8}>
                <div id="dashboard_recent_list_col">
                  <DashboardCard collections={[collection]} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="dashboard_popular">
        <div className="dashboard_title">
          <div className="dashboard_title_text">Popular study sets</div>
          <Link //see more
            to="/create_collection"
            className="dashboard_link"
            onClick={() => setActive("")}
          >
            <BtnBlue defaultText="See more" />
          </Link>
        </div>

        {/* popular list */}
        <div style={{ padding: 20 }}>
          <Row gutter={[16, 16]}>
            {popularList.map((collection, index) => (
              <Col key={collection.id} xs={24} sm={12} md={8} lg={8} xl={8}>
                <div id="dashboard_recent_list_col">
                  <DashboardCard collections={[collection]} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
