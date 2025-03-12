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
          ? "var(--color-light-button-hover)" // Hover
          : isClicked
          ? "var(--color-light-background)" // Khi active
          : "#fff", // Mặc định,
        color: "var(--color-text)",

        padding: "10px",
        border: "none", // Xóa tất cả border mặc định
        borderRadius: "var(--button-border-radius)",
        border: isClicked ? "1px solid" : "1px solid var(--color-light-button)",

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
