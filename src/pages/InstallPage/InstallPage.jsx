import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import InstallOne from "../../assets/instal1.mp4";
import InstallTwo from "../../assets/instal2.mp4";
import InstallThree from "../../assets/instal3.mp4";
import InstallFour from "../../assets/instal4.mp4";
import InstallFive from "../../assets/instal5.mp4";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function InstallPage() {
  const videoRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <Box p={"30px 0"}>
      <Box className="container">
        <Heading {...css.title}>
         {t("installName")}
        </Heading>
        <SimpleGrid mt={"30px"} gap={"30px"} columns={{ base: 1, md: 2 }}>
          <Box>
            <video className="instal-video" ref={videoRef} loop muted controls>
              <source src={InstallOne} type="video/mp4" />
            </video>
            <Text {...css.text}>{t("install")}</Text>
          </Box>
          <Box>
            <video className="instal-video" ref={videoRef} loop muted controls>
              <source src={InstallTwo} type="video/mp4" />
            </video>
            <Text {...css.text}>{t("install1")}</Text>
          </Box>
          <Box>
            <video className="instal-video" ref={videoRef} loop muted controls>
              <source src={InstallThree} type="video/mp4" />
            </video>
            <Text {...css.text}>
              {t("install2")}
            </Text>
          </Box>
          <Box>
            <video className="instal-video" ref={videoRef} loop muted controls>
              <source src={InstallFour} type="video/mp4" />
            </video>
            <Text {...css.text}>
              {t("install3")}
            </Text>
          </Box>
          <Box>
            <video className="instal-video" ref={videoRef} loop muted controls>
              <source src={InstallFive} type="video/mp4" />
            </video>
            <Text {...css.text}>
              {t("install4")}
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default InstallPage;

const css = {
  title: {
    fontSize: {
      base: "20px",
      lg: "30px",
    },
    width: {
      base: "100%",
      lg: "850px",
    },
    lineHeight: {
      base: "25px",
      lg: "35px",
    },
    color: "#110D60",
    fontWeight: "600",
  },
  text: {
    fontSize: "18px",
    lineHeight: "25px",
    marginBottom: "20px",
    color: "#110D60",
    margin: "10px 0",
  },
};
