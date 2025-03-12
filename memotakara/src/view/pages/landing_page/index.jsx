import "./index.css";
import landing_img from "../../../img/landing_img.png";
import landing_feature1 from "../../../img/landing_feature1.png";
import landing_feature2 from "../../../img/landing_feature2.png";
import landing_feature3 from "../../../img/landing_feature3.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnBlue from "../../../components/btn/btn-blue.jsx";
import BtnWhite from "../../../components/btn/btn-white.jsx";

function LandingPage() {
  const [active, setActive] = useState("");
  return (
    <div className="landing_container">
      <div className="landing_introduce">
        <div className="landing_content">
          <div
            style={{
              fontSize: "var(--logo-size)",
              fontWeight: "var(--header-weight-size)",
            }}
          >
            Enhance memory,
            <br />
            cognition
          </div>
          <div
            style={{
              marginTop: "18px",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
              fontSize: "var(--header-size)",
            }}
          >
            Join the MemoTakara community today and explore the power of your
            mind!
          </div>
          <div className="landing_btn">
            <Link
              to="/login"
              className="landing_link"
              onClick={() => setActive("login")}
            >
              <BtnBlue defaultText="Get started" />
            </Link>

            <BtnWhite id="landing_btn_more" defaultText="Learn more" />
          </div>
        </div>

        <div className="landing_image">
          <img
            src={landing_img}
            alt="dashboard image"
            style={{
              width: "85%",
              objectFit: "cover",
              marginLeft: "25%",
              border: "2px dashed var(--color-button)",
            }}
          />
        </div>
      </div>

      <div className="landing_feature">
        <div className="landing_feature_title">Features</div>
        <div className="landing_feature_list">
          <div
            className="landing_item"
            style={{
              width: "360px",
              display: "grid",
              gridTemplateRows: "auto auto 1fr",
            }}
          >
            <img src={landing_feature1} alt="feature 1" />
            <div
              style={{
                marginTop: "10px",
                fontSize: "var(--logo-size)",
                fontWeight: "var(--header-weight-size)",
              }}
            >
              Optimize Learning
            </div>
            <div
              style={{
                alignSelf: "end", // Đưa phần tử này xuống đáy
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
                color: "var(--color-text-disabled",
                fontSize: "var(--body-size)",
              }}
            >
              Customize memory practices to your needs and style.
            </div>
          </div>

          <div
            className="landing_item"
            style={{
              width: "320px",
              display: "grid",
              gridTemplateRows: "auto auto 1fr",
            }}
          >
            <img src={landing_feature2} alt="feature 2" />
            <div
              style={{
                marginTop: "10px",
                fontSize: "var(--logo-size)",
                fontWeight: "var(--header-weight-size)",
              }}
            >
              Boost Memory Retention
            </div>
            <div
              style={{
                alignSelf: "end", // Đưa phần tử này xuống đáy
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
                color: "var(--color-text-disabled",
                fontSize: "var(--body-size)",
              }}
            >
              Enhance recall with scientifically-proven methods.
            </div>
          </div>

          <div
            className="landing_item"
            style={{
              width: "300px",
              display: "grid",
              gridTemplateRows: "auto auto 1fr",
            }}
          >
            <img src={landing_feature3} alt="feature 3" />
            <div
              style={{
                marginTop: "10px",
                fontSize: "var(--logo-size)",
                fontWeight: "var(--header-weight-size)",
              }}
            >
              AI Assistant
            </div>
            <div
              style={{
                alignSelf: "end", // Đưa phần tử này xuống đáy
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
                color: "var(--color-text-disabled",
                fontSize: "var(--body-size)",
              }}
            >
              Provide personalized memory training, 24/7 support, and
              interactive tips.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
