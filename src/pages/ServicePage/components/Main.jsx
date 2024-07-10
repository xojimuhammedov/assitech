import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
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
            <Heading {...css.title}>Ремонт медицинской техники</Heading>
            <Text {...css.text}>
              При необходимости мы проведем ремонт любой сложности медицинской
              техники как на месте эксплуатации, так и на собственных ремонтных
              площадках.
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          mt={"80px"}
          justifyContent={"space-evenly"}>
          <Image {...css.subimage} src={MedicTwo} alt="MedicOne" />
          <Box>
            <Heading {...css.title}>Постгарантийное обслуживание</Heading>
            <Text {...css.text}>
              После окончания гарантийного срока эксплуатации компания Ordamed
              предлагает своим клиентам постгарантийное обслуживание.
              Постгарантийное обслуживание возможно в двух вариантах:
            </Text>
            <Text {...css.subtext}>
              Контракт на постгарантийное обслуживание на обусловленный период
            </Text>
            <Text {...css.subtext}>
              Контракт на разовый ремонт или сервисное обслуживание
            </Text>
            <Text mt={"30px"} {...css.text}>
              Каждый из предлагаемых вариантов имеет свое преимущество. Контракт
              на постгарантийное сервисное обслуживание в обусловленный период
              позволяет клиентам компании Ordamed быть уверенными в том, что
              сложное оборудование будет безотказно работать и после истечения
              срока гарантии.
            </Text>
            <Button colorScheme="red" {...css.button}>
              Отправить заявку на обслуживание
            </Button>
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
            <Heading {...css.name}>Гарантия 36 месяцев</Heading>
            <Text {...css.subname}>
              36 месяцев гарантии, лучшие сервисные инженеры, постгарантийное
              техническое обслуживание, диагностика и ремонт не только нашего
              оборудования, но и других производителей.
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
  subtext: {
    fontSize: "20px",
    width: {
      base: "100%",
      lg: "400px",
    },
    margin: "10px 0",
    fontWeight: "600",
    color: "gray",
    letterSpacing: "-0.5px",
    lineHeight: "20px",
    marginBottom: "16px",
  },
  button: {
    height: "60px",
    width: {
      base: "100%",
      lg: "420px",
    },
    fontSize: "20px",
    letterSpacing: "-0.5px",
    lineHeight: "25px",
    marginTop: "25px",
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
