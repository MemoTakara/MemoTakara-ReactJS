import { useState } from "react";
const BtnBlue = ({ defaultText, disabled }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      style={{
        backgroundColor: disabled
          ? "var(--color-btn-disabled)"
          : "var(--color-light-button)", // Đổi màu nền
        color: disabled ? "var(--color-text-disabled)" : "#fff", // Đổi màu chữ

        padding: "10px",
        border: "none", // Xóa tất cả border mặc định
        borderRadius: "var(--button-border-radius)",
        border: disabled
          ? "1px solid #999"
          : isHovered
          ? "1px solid var(--color-light-button)"
          : "1px solid",

        cursor: disabled ? "not-allowed" : "pointer",

        fontSize: "var(--body-size)",

        transition: "0.3s ease-in-out", // tạo hiệu ứng mượt mà
        transform: disabled ? "none" : "scale(1)", // Hiệu ứng phóng to khi hover
        opacity: disabled ? 0.6 : 1, // Giảm độ rõ khi bị disable
      }}
    >
      {defaultText}
    </button>
  );
};

export default BtnBlue;
