import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import LogoIcon from "../../../assets/assitech.jpg";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <Box id="about" p={"35px 0"}>
      <Box className="container">
        <Fade bottom>
          <Heading {...css.name}>{t("ASSI Tech")}</Heading>
        </Fade>
        <Fade bottom>
          <Flex
            flexDirection={{ base: "column-reverse", md: "row" }}
            align={"center"}
            gap={{ base: "20px", md: "50px" }}>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              mt={"25px"}
              gap={{ base: "20px", md: "40px" }}>
              <Box>
                <Text {...css.text}>{t("text1")}</Text>
                <Text {...css.text}>{t("text2")}</Text>
              </Box>
              <Box>
                <Text {...css.text}>{t("text3")}</Text>
                <Text {...css.text}>{t("text4")}</Text>
                <Text {...css.text}>{t("text5")}</Text>
                <Text {...css.text}>{t("text6")}</Text>
              </Box>
            </Flex>
            <Image src={LogoIcon} {...css.image} />
          </Flex>
        </Fade>
      </Box>
    </Box>
  );
}

export default AboutUs;

const css = {
  name: {
    fontSize: {
      base: "30px",
      md: "30px",
      xl: "45px",
    },
    lineHeight: "55px",
    letterSpacing: "1px",
    color: "#110D60",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    letterSpacing: "0.5px",
    width: {
      base: "100%",
      md: "430px",
    },
    margin: "10px 0",
  },
  image: {
    width: "400px",
    objectFit: "contain",
    marginTop: {
      base: "30px",
      md: "0px",
    },
  },
};
