import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Link as HomeLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Assitech from "../../assets/assitech.jpg";
import Language from "../Language/Language";
import NavModal from "../NavModal";

function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box {...css.nav}>
      <Box className="container">
        <Flex {...css.list}>
          <HomeLink to="/">
            <Image
              w={{ xl: "220px", md: "150px", sm: "150px", base: "200px" }}
              h={{ xl: "65px", md: "40px", sm: "40px", base: "55px" }}
              src={Assitech}
              alt="Assitech"
              objectFit={"contain"}
            />
          </HomeLink>
          <Flex gap="25px">
            <Box display={{ base: "block", lg: "none" }}></Box>
            <Link onClick={() => navigate("/")} {...css.link} href="#about">
              {t("About Us")}
            </Link>
            <Link onClick={() => navigate("/")} {...css.link} href="#product">
              {t("Projects")}
            </Link>
            <Link onClick={() => navigate("/")} {...css.link} href="#news">
              {t("News")}
            </Link>
            <Link onClick={() => navigate("/")} {...css.link}>
              {t("Contact")}
            </Link>
            <Link onClick={() => navigate("/instal")} {...css.link}>
              {t("Установка")}
            </Link>
            <Language />
          </Flex>
          <Box display={{ base: "block", lg: "none" }}>
            <NavModal />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  nav: {
    padding: "20px 0",
    paddingBottom: "8px",
    width: "100%",
    background: "#fff",
  },
  link: {
    fontSize: { xl: "16px", lg: "14px", md: "14px" },
    fontWeight: 600,
    lineHeight: "24px",
    fontStyle: "normal",
    transition: "0.3s all",
    display: {
      xl: "inline-block",
      lg: "inline-block",
      md: "none",
      sm: "none",
      base: "none",
    },
    color: "#2E3A6B",
    width: "auto",
    position: "relative",
    paddingBottom: "3px",
    _hover: {
      color: "#C3242A",
      _before: {
        transform: "scaleX(1)",
      },
    },
    _before: {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "2px",
      transform: "scaleX(0)",
      background: "#C3242A",
      borderRadius: "23px 10px 0px 0px",
      transition: "0.3s",
    },
  },
  list: {
    align: "center",
    justifyContent: "space-between",
  },
};
