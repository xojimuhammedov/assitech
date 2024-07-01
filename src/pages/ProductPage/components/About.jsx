import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { productData } from "../../../data";

function About() {
  const data = productData;
  const { id } = useParams();
  const about = data.find((item) => item.id === Number(id));

  console.log(about);

  return (
    <Box p={"50px 0"}>
      <Box className="container">
        <Flex justifyContent={"space-between"} width={"100%"}>
          <Box {...css.left}>
            <Image {...css.image} src={about?.image} />
          </Box>
          <Box>
            <Heading {...css.title}>{about?.title}</Heading>
            <Text {...css.text}>{about?.description}</Text>
            <Flex justifyContent={"space-between"}>
              <Text {...css.subname}>Бренд: {about?.brend}</Text>
              <Text {...css.subtext}>
                Бесплатная доставка: Бесплатный монтаж, наладка и обучение
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text {...css.subname}>Гарантия: {about?.garanty}</Text>
              <Text {...css.subtext}>Рассрочка на 6 месяцев</Text>
            </Flex>

            <Flex>
              <Box>
                <Text {...css.price}>от {about?.price}</Text>
                <Text {...css.subtext}>
                  Цены на сайте могут изменяться при выборе комплектующих
                </Text>
              </Box>
              <Button {...css.button}>Заказ в 1 клик</Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default About;

const css = {
  image: {
    width: "100%",
    height: "550px",
    objectFit: "contain",
  },
  left: {
    width: "40%",
  },
  title: {
    fontSize: "45px",
    fontWeight: "bold",
    color: "#110D60",
    lineHeight: "50px",
    width: "650px",
  },
  text: {
    fontSize: "16px",
    color: "#110D60",
    lineHeight: "26px",
    width: "650px",
    margin: "20px 0",
    fontWeight: "normal",
    marginBottom: "50px",
  },
  price: {
    color: "#C3242A",
    fontSize: "35px",
    lineHeight: "40px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
  },
  subname: {
    color: "gray",
    fontSize: "20px",
    lineHeight: "26px",
    marginBottom: "15px",
    fontWeight: "normal",
    marginTop: "15px",
  },
  subtext: {
    color: "gray",
    fontSize: "18px",
    lineHeight: "26px",
    marginBottom: "15px",
    fontWeight: "normal",
    marginTop: "15px",
    width: "350px",
  },
  button: {
    background: "#C3242A",
    color: "#fff",
    fontWeight: "600 !important",
    height: "70px",
    transition: "0.3s ease",
    fontSize: "20px",
    lineHeight: "26px",
    cursor: "pointer",
    border: "2px solid #C3242A",
    width: "100%",
    marginTop: "40px",
    letterSpacing: "1.5px",

    _hover: {
      background: "#fff",
      color: "#C3242A",
      border: "2px solid #C3242A",
      cursor: "pointer",
      transition: "0.3s ease",
      letterSpacing: "1.5px",
      transform: "scale(1.02)",
    },
  },
};
