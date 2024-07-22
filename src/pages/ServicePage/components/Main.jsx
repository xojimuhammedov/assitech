import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import MedicOne from "../../../assets/medic.jpg";
import MedicTwo from "../../../assets/medic1.jpg";

function Main() {
  return (
    <Box p={{ base: "50px 0", lg: "50px" }}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          m={"30px 0"}
          justifyContent={"space-evenly"}>
          <Image {...css.image} src={MedicOne} alt="MedicOne" />
          <Box>
            <Heading {...css.title}>Ремонт УЗИ аппаратов и датчиков.</Heading>
            <Text {...css.text}>
              При необходимости окажемся ремонтные услуги и диагностику для
              ваших Узи аппаратов.
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          mt={"80px"}
          justifyContent={"space-evenly"}>
          <Image {...css.subimage} src={MedicTwo} alt="MedicOne" />
          <Box>
            <Heading {...css.title}>Гарантийное обслуживание.</Heading>
            <Text {...css.text}>
              После покупки Узи аппаратов, лучшие сервисные инженеры компании
              ASSITECH будут оказывать все ремонтные услуги и отстранять
              неполадки техники в течении 12 месяцев .
            </Text>
          </Box>
        </Flex>
        <Heading mt={"50px"} {...css.title}>
          Особенности обслуживания
        </Heading>
        <SimpleGrid
          mt={"80px"}
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={"50px"}>
          <Box>
            <Heading {...css.name}>Комплексное оснащение</Heading>
            <Text {...css.subname}>
              Импорт полного спектра необходимого оборудования и расходных
              материалов для ЛПУ, отделений и кабинетов от мировых
              производителей из Европы и Южной Кореи
            </Text>
          </Box>
          <Box>
            <Heading {...css.name}>Предоставление продукции в лизинг</Heading>
            <Text {...css.subname}>
              Индивидуальные и выгодные решения по лизинговым сделкам
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  title: {
    fontSize: {
      base: "20px",
      lg: "55px",
    },
    lineHeight: {
      base: "25px",
      lg: "60px",
    },
    marginBottom: "16px",
    fontWeight: 600,
    letterSpacing: "-1px",
    color: "gray",
    width: {
      base: "100%",
      lg: "650px",
    },
    fontFamily: "Unbounded !important",
  },
  image: {
    width: "450px",
    objectFit: "cover",
  },
  text: {
    color: "gray",
    fontSize: "16px",
    lineHeight: "25px",
    marginBottom: "16px",
    letterSpacing: "-0.5px",
    width: {
      base: "100%",
      lg: "550px",
    },
  },
  subimage: {
    height: {
      base: "350px",
      lg: "550px",
    },
    objectFit: "cover",
    width: "450px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "600",
    color: "gray",
    marginBottom: "10px",
    letterSpacing: "-0.5px",
    lineHeight: "25px",
    padding: "25px 0",
    borderBottom: "0.5px solid gray",
    borderTop: "0.5px solid gray",
    width: "auto",
    display: "inline-block",
    fontFamily: "Unbounded !important",
  },
  subname: {
    color: "gray",
    fontSize: "14px",
    lineHeight: "25px",
    fontWeight: "400",
  },
};
