import { Button } from "antd";
import styles from "./ButtonCustom.module.css";

const ButtonCustom = ({
  size,
  backgroundColor,
  textColor,
  children,
  ...restProps
}: any) => {
  // const buttonSize =
  //   size === "small"
  //     ? 100
  //     : size === "medium"
  //     ? 250
  //     : size === "large"
  //     ? 300
  //     : 145;

  const buttonStyle = {
    // width: buttonSize,
    height: "auto",
    backgroundColor: backgroundColor || "#ff630e",
    color: textColor || "#fff",
    border: "none",
  };

  return (
    <Button block style={buttonStyle} {...restProps} className={styles.wrapper}>
      {children}
    </Button>
  );
};

export default ButtonCustom;
