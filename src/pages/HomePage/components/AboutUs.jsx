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
                <Text {...css.text}>
                  {t(
                    "Наша компания  ASSITECHBIO специализируется на: продаже и обслуживании ультразвуковых аппаратов и организации курсов  УЗД."
                  )}
                </Text>
                <Text {...css.text}>
                  {t(
                    "Мы предлагаем широкий ассортимент оборудования различных производителей и ценовых категорий: от компактных портативных узи аппаратов для мобильных услуг до высокоточных стационарных установок для медицинских учреждений."
                  )}
                </Text>
              </Box>
              <Box>
                <Text {...css.text}>
                  {t(
                    "Мы работаем с проверенными поставщиками и гарантируем качество продукции, а также предоставляем гарантийное и послегарантийное обслуживание ультразвуковых аппаратов. "
                  )}
                </Text>
                <Text {...css.text}>
                  {t(
                    "Наши специалисты имеют большой опыт в области медицинского оборудования и всегда готовы помочь с выбором и установкой необходимого оборудования."
                  )}
                </Text>
                <Text {...css.text}>
                  {t(
                    "Наша цель - обеспечить клиентов наилучшими ультразвуковыми аппаратами, помочь им оптимизировать свою работу и повысить эффективность диагностики и лечения пациентов."
                  )}
                </Text>
                <Text {...css.text}>
                  {t(
                    "Мы стремимся к долгосрочным отношениям с нашими клиентами, предлагая им только лучшее оборудование и сервис."
                  )}
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
