import "./index.css";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Tooltip, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import BtnWhite from "../../../components/btn/btn-white";

function StudySets() {
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

  //select folders, files
  const handleSets = (value) => {
    console.log(`selected ${value}`);
    setSets((prevSets) =>
      prevSets.map((set) => ({
        ...set,
        disabled: set.value === value, // Chọn mục nào thì mục đó bị disabled
      }))
    );
  };
  const [set, setSets] = useState([
    {
      value: "Folders",
      label: "Folders",
      disabled: false,
    },
    {
      value: "Study sets",
      label: "Study sets",
      disabled: true,
    },
  ]);

  return (
    <div className="std-set-container">
      <div className="std-set-select">
        <Select
          defaultValue="Study sets"
          style={{
            width: 120,
            height: 40,
            marginRight: "10px",
          }}
          onChange={handleSets}
          options={set}
        />

        <Link //create new collection
          to="/create_collection"
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
              icon={
                <PlusOutlined style={{ color: "#fff", fontSize: "24px" }} />
              }
            />
          </Tooltip>
        </Link>
      </div>
      <BtnWhite defaultText="test btn" />
    </div>
  );
}

export default StudySets;
