import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import LogoIcon from "../../../assets/assitech.jpg";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <Box p={"35px 0"}>
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
                <Text {...css.text}>{t("Лабораторные услуги")}</Text>
                <Text {...css.text}>
                  {t("Лабораторные анализы и диагностические услуги.")}
                </Text>
                <Text {...css.text}>{t("Здравоохранение")}</Text>
                <Text {...css.text}>
                  {t("Советы и рекомендации врача в различных областях.")}
                </Text>
                <Text {...css.text}>
                  {t("Профилактические меры и методы охраны здоровья.")}
                </Text>
              </Box>
              <Box>
                <Text {...css.text}>
                  {t("Реабилитационные и физиотерапевтические услуги.")}
                </Text>
                <Text {...css.text}>
                  {t("Уход за кожей и дерматологические услуги.")}
                </Text>
                <Text {...css.text}>
                  {t("Советы и рекомендации врача в различных областях.")}
                </Text>
                <Text {...css.text}>{t("Аварийные службы.")}</Text>
                <Text {...css.text}>
                  {t("Услуги по обезболиванию и анестезиологии.")}
                </Text>
                <Text {...css.text}>{t("Офтальмология")}</Text>
                <Text {...css.text}>
                  {t("Женское здоровье и гинекологические услуги.")}
                </Text>
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
