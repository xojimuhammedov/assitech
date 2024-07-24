import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Iframe from "react-iframe";
import { useTranslation } from "react-i18next";
import Instagram from "../../assets/svg/Instagram";
import Telegram from "../../assets/svg/Telegram";
import Facebook from "../../assets/svg/Facebook";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <Box {...css.box}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}>
          <Box padding={{ base: "20px 30px", md: "20px 120px" }}>
            <Heading {...css.title}>{t("Contact")}</Heading>
            <Text {...css.name}>
              {t("Company address / Central Sales Office:")}
            </Text>
            <Text {...css.text}>
              Tashkent, Olmazor Yunusobod, massiv 11 52B
            </Text>
            <Text {...css.name}>{t("Phone")}</Text>

            <Link {...css.text} href="tel:+998998159885">
              +998 99 815 98 85
            </Link>
            <Text {...css.name}>Mail:</Text>
            <Text flexWrap={"wrap"} display={"flex"} gap={"10px"} {...css.text}>
              <a href="mailto:Assitechbio@gmail.com">sales@assitech.uz</a>
              <a href="mailto:Akramov@gmail.com">Ceo@assitech.uz</a>
              <a href="mailto:farkhodovasevinch2004@gmail.com">
                Sevinch@assitech.uz
              </a>
            </Text>
            <Text {...css.name}>{t("Working schedule:")}</Text>
            <Text {...css.text}>Monday - Friday: 9:00 - 18:00</Text>
            <Text {...css.name}>{t("We are in social networks")}</Text>
            <Flex mt={"20px"} gap={"15px"} align={"center"}>
              <Link
                className="navbar-link"
                href="https://www.instagram.com/assitechbio">
                <Instagram height={26} width={26} />
              </Link>
              <Link className="navbar-link" href="https://t.me/UZD_sistemi">
                <Telegram height={26} width={26} />
              </Link>
              <Link
                className="navbar-link"
                href="https://www.facebook.com/rahmat.kham8?mibextid=ZbWKwL">
                <Facebook height={26} width={26} />
              </Link>
            </Flex>
            <Text {...css.subtext}>
              © 2024 ASSI Tech. {t("Все права защищены.")}
            </Text>
          </Box>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.8109377689675!2d69.28942496359096!3d41.37019392500077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef334e5278a27%3A0x4d04cbba7c68f2fa!2sYunusabad-11%2C%20100037%2C%20Tashkent%2C%20Tashkent%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1719814194681!5m2!1sen!2s"
            width="640px"
            height="100%"
            id=""
            className="footer-location"
          />
        </Flex>
      </Box>
    </>
  );
}

export default Footer;

const css = {
  box: {
    backgroundColor: "#110D60",
    position: "relative",
    marginTop: "50px",
  },
  title: {
    color: "#fff",
    marginBottom: "50px",
    marginTop: "20px",
  },
  name: {
    color: "#EDCB3F",
    fontWeight: 600,
    margin: "8px 0",
    fontSize: "18px",
    lineHeight: "24px",
  },
  text: {
    color: "#fff",
    marginBottom: "25px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    letterSpacing: "0.5px",
  },
  subtext: {
    color: "gray",
    marginBottom: "25px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    paddingTop: "60px",
  },
};
