import { Box, Flex, Image, Text } from "@chakra-ui/react";
import AparatOne from "../../../assets/aparat.png";
import AparatTwo from "../../../assets/aparat1.png";

function Main() {
  return (
    <Box {...css.main}>
      <Box className="container">
        <Flex>
          <Text {...css.title}>
            Поставляем медицинское оборудование напрямую от производителя
          </Text>
          <Box>
            <Image {...css.left} src={AparatOne} />
          </Box>
        </Flex>
        <Flex mt={"180px"}>
          <Box>
            <Image {...css.right} src={AparatTwo} />
          </Box>
          <Flex width={"100%"} justifyContent={"flex-end"}>
            <Text {...css.titles}>
              Решаем задачи комплексного медицинского оснащения и сервисного
              обслуживания
            </Text>
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
    marginTop: "50px",
    position: "relative",
  },
  title: {
    fontSize: "65px",
    lineHeight: "60px",
    width: "900px",
    fontWeight: "500",
    letterSpacing: "-1.5px",
  },
  left: {
    position: "absolute",
    right: 0,
    top: "-20%",
  },
  right: {
    position: "absolute",
    left: "50px",
    top: "75%",
  },
  titles: {
    fontSize: "63px",
    lineHeight: "58px",
    fontWeight: "500",
    width: "900px",
  },
};
