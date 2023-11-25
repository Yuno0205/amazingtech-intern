import styles from "./Header.module.css";
import { Layout, Image, Badge, Flex } from "antd";
import MenuBar from "../../MenuBar";
import HeaderIcon from "../../../assets/images/icon-logo.webp";
import ShopIcon from "../../../assets/images/icon-shopping-cart.webp";
import Container from "../Container";
import { useEffect, useState } from "react";
import TopHeader from "../../TopHeader";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const headerHeight = 80;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        setIsHeaderVisible(false);
      } else {
        // Chỉ hiển thị khi cuộn lên trên cùng
        setIsHeaderVisible(scrollTop <= headerHeight);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex vertical className={styles.wrapper}>
      <Flex
        style={{ display: isHeaderVisible ? "flex" : "none", width: "100%" }}
      >
        <TopHeader />
      </Flex>
      <Container>
        <Header className={styles.container}>
          {/* Logo on the left */}
          <div>
            <div className={styles.logo}>
              <Link to="/">
                <Image src={HeaderIcon} preview={false} />
              </Link>
            </div>
          </div>

          {/* MenuBar */}
          <MenuBar />

          {/* Shop on the right */}
          <Badge count="3" className={styles.icon}>
            <div className={styles.shopIcon}>
              <Image preview={false} src={ShopIcon} />
            </div>
          </Badge>
        </Header>
      </Container>
    </Flex>
  );
};

export default AppHeader;
