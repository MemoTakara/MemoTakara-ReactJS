import "./index.css";
import React, { useEffect, useRef } from "react";
import {
  LogoutOutlined,
  UserOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Input, Button, message, Upload } from "antd";
import { useNavigate } from "react-router-dom";

//Upload image
const props = {
  name: "file",
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function Settings() {
  const navigate = useNavigate();

  //Save button
  const [messageApi, contextHolder] = message.useMessage();
  const handleSave = () => {
    messageApi.open({
      type: "success",
      content: "Update successful!",
      //style,
    });
  };

  //Sign out
  const handleSignout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="setting_container">
      <div className="setting_title">
        <div className="setting_title_text">Settings</div>

        <Button
          type="primary"
          htmlType="submit"
          className="setting_btn"
          id="setting_btn_signout"
          icon={<LogoutOutlined />}
          onClick={handleSignout}
        >
          Sign out
        </Button>
      </div>

      <div className="setting_item">
        <div className="setting_item_title">
          <div className="setting_item_title_text">Account</div>
          {contextHolder}
          <Button type="primary" className="setting_btn" onClick={handleSave}>
            Save
          </Button>
        </div>

        <div className="setting_item_content">
          <div className="setting_avatar">
            {/* <UserOutlined
              style={{
                fontSize: "150px",
                background: "#fff",
                borderRadius: "50%",
                border: "1px solid var(--color-button)",
                padding: "20px",
                color: "var(--color-disabled)",
              }}
            />
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload image</Button>
            </Upload> */}
          </div>
        </div>
      </div>

      {/* <div className="namepage-mobile">
        <div className="account-wrap">
          <div className="account-container">
            <div className="account-pic">
              <img
                className="avt-img"
                src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
                alt="Oops! Something went wrong"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="change-img">Thay ảnh đại diện</div>
          </div>
          <div className="user-info">
            <div className="user-name">
              <div className="name-text">Họ và tên:</div>
              <div className="user-input">
                <Input
                  defaultValue="Nguyễn Thị Hương Lan"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
            <div className="user-date">
              <div className="date-text">Năm sinh:</div>
              <div className="user-input">
                <Input
                  defaultValue="10/10/1978"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
            <div className="user-address">
              <div className="address-text">Địa chỉ:</div>
              <div className="user-input">
                {" "}
                <Input
                  defaultValue="Ngõ 1 đường 30/4 phường A, Hà Nội"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
            <div className="user-phone">
              <div className="phone-text">Điện thoại:</div>
              <div className="user-input">
                <Input
                  defaultValue="0911617850"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="more-info">
          <div className="role-info">
            <div className="role-text">Vai trò:</div>
            <div
              className="role-input"
              style={{ color: "#074979", fontWeight: "700" }}
            >
              Giảng viên
            </div>
          </div>
          <div className="univer-info">
            <div className="univer-text">Trường:</div>
            <div
              className="univer-input"
              style={{ color: "#074979", fontWeight: "700" }}
            >
              Đại học Kinh tế Quốc dân
            </div>
          </div>
          <div className="member-info">
            <div className="member-text">Thành viên:</div>
            <div
              className="member-input"
              style={{ color: "#074979", fontWeight: "700" }}
            >
              Thân thiết (có thời gian sử dụng trên 1 năm)
            </div>
          </div>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="update-info"
          onClick={handleSave}
        >
          Cập nhật thông tin
        </Button>
      </div>
      <div className="mobile-line"></div>
      <div className="change-pass-mobile">
        <div className="change-pass-mobile-header">Thay đổi mật khẩu</div>
        <div className="change-pass-mobile-content">
          <div className="change-pass-mobile-old_pass">
            <div className="change-pass-mobile-old-text">Mật khẩu cũ:</div>
            <div className="change-pass-mobile-old-inp">
              <Input.Password />
            </div>
          </div>
          <div className="change-pass-mobile-old_pass">
            <div className="change-pass-mobile-old-text">Mật khẩu mới:</div>
            <div className="change-pass-mobile-old-inp">
              <Input.Password />
            </div>
          </div>
          <div className="change-pass-mobile-old_pass">
            <div className="change-pass-mobile-old-text">
              Nhập lại mật khẩu:
            </div>
            <div className="change-pass-mobile-old-inp">
              <Input.Password />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Settings;
