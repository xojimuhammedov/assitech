import { Box, Flex, Image, Text } from "@chakra-ui/react";
import AparatOne from "../../../assets/aparat.png";
import AparatTwo from "../../../assets/aparat1.png";
import { Fade } from "react-reveal";

function Main() {
  return (
    <Box {...css.main}>
      <Box className="container">
        <Flex>
          <Fade bottom>
            <Text {...css.title}>
              <b style={{ color: "#C3242A" }}>Поставляем</b> медицинское
              оборудование напрямую от производителя
            </Text>
          </Fade>
          <Box>
            <Image {...css.left} src={AparatOne} />
          </Box>
        </Flex>
        <Flex mt={"180px"}>
          <Box>
            <Image {...css.right} src={AparatTwo} />
          </Box>
          <Flex width={"100%"} justifyContent={"flex-end"}>
            <Fade bottom>
              <Text {...css.titles}>
                <b style={{ color: "#C3242A" }}>Решаем</b> задачи комплексного
                медицинского оснащения и сервисного обслуживания
              </Text>
            </Fade>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  main: {
    background: "#F7F7F7",
    padding: "50px 0",
    marginTop: {
      base: "30px",
      lg: "120px",
    },
    position: "relative",
  },
  title: {
    fontSize: {
      base: "25px",
      lg: "65px",
    },
    lineHeight: {
      base: "30px",
      lg: "60px",
    },
    width: {
      base: "100%",
      lg: "900px",
    },
    fontWeight: "500",
    letterSpacing: "-1.5px",
    color: "#110D60",
  },
  left: {
    position: "absolute",
    right: 0,
    top: {
      base: "20%",
      lg: "-20%",
    },
    width: {
      base: "250px",
      lg: "auto",
    },
  },
  right: {
    position: "absolute",
    left: "50px",
    top: {
      base: "90%",
      lg: "75%",
    },
    width: {
      base: "250px",
      lg: "auto",
    },
  },
  titles: {
    fontSize: {
      base: "25px",
      lg: "65px",
    },
    lineHeight: {
      base: "30px",
      lg: "60px",
    },
    width: {
      base: "100%",
      lg: "900px",
    },
    fontWeight: "500",
    letterSpacing: "-1.5px",
    color: "#110D60",
    marginTop: {
      base: "60px",
      lg: 0,
    },
  },
};
