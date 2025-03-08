import { useState } from "react";
const BtnWhite = ({ defaultText }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered
          ? "var(--color-light-button)" // Hover
          : isClicked
          ? "var(--color-light-button)"
          : "var(--color-light-background)", // Đổi màu nền
        color: isHovered
          ? "#fff" // Hover
          : isClicked
          ? "#fff"
          : "var(--color-text)", // Đổi màu chữ

        padding: "10px",
        border: "none", // Xóa tất cả border mặc định
        borderRadius: "0",
        border: isClicked ? "3px solid" : "3px solid var(--color-light-button)",

        cursor: "pointer",

        fontSize: "var(--body-size)",

        transition: "0.3s ease-in-out", // tạo hiệu ứng mượt mà
        transform: isHovered ? "scale(0.95)" : "scale(1)", // Hiệu ứng phóng to khi hover
      }}
    >
      {defaultText}
    </button>
  );
};

export default BtnWhite;
