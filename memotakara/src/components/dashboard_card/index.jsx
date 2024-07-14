import "./index.css";
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Tooltip } from "antd";

const DashboardCard = ({ collections, setCollections }) => {
  const [active, setActive] = useState("");

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

  return (
    <div>
      {collections.map((collection) => (
        <div key={collection.id} className="dashboard_card_container">
          <div className="dashboard_card_title">{collection.title}</div>

          <div className="dashboard_card_status">
            <Tooltip //new
              placement="bottomRight"
              title="new card"
              arrow={mergedArrow}
            >
              <div className="dashboard_card_status_new">{collection.new}</div>
            </Tooltip>

            <Tooltip //learning
              placement="bottomRight"
              title="learning card"
              arrow={mergedArrow}
            >
              <div className="dashboard_card_status_learn">
                {collection.learning}
              </div>
            </Tooltip>

            <Tooltip //due
              placement="bottomRight"
              title="due card"
              arrow={mergedArrow}
            >
              <div className="dashboard_card_status_due">{collection.due}</div>
            </Tooltip>
          </div>

          <div className="dashboard_card_footer">
            {/* create by */}
            <div
              style={{
                fontStyle: "italic",
                fontSize: "16px",
                // fontWeight: "var(--header-weight-size)",
                alignContent: "center",
              }}
            >
              {collection.create_by}
            </div>

            <Link //study now
              to="/study_detail"
              className="dashboard_card_link"
              onClick={() => setActive("")}
            >
              <Button
                style={{
                  color: "#fff",
                  padding: "14px",
                  fontSize: "12px",
                  fontWeight: "var(--header-weight-size)",
                  borderRadius: "15px",
                  background: "var(--color-button)",
                }}
              >
                Study now
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
