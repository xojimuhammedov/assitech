import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function About() {
  // const data = productData;
  const { id } = useParams();
  const [t, i18n] = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://v1.centurysilkroadtravel.uz/api/products/${id}`)
      .then((res) => setProducts(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Box p={"50px 0"}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          width={"100%"}>
          <Box {...css.left}>
            <Image
              {...css.image}
              src={`https://v1.centurysilkroadtravel.uz/api/uploads/images/${products?.image_src}`}
            />
          </Box>
          <Box>
            <Heading {...css.title}>
              {products[`title_${i18n?.language}`]}
            </Heading>
            <Text {...css.text}>{products[`text_${i18n?.language}`]}</Text>
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              justifyContent={"space-between"}>
              <Text {...css.subtext}>
                Бесплатная доставка: Бесплатный монтаж, наладка и обучение
              </Text>
            </Flex>
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              justifyContent={"space-between"}>
              <Text {...css.subtext}>Рассрочка на 6 месяцев</Text>
            </Flex>

            <Flex flexDirection={{ base: "column", lg: "row" }}>
              <Box>
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
    height: {
      base: "350px",
      lg: "550px",
    },
    objectFit: "contain",
  },
  left: {
    width: {
      base: "100%",
      lg: "40%",
    },
  },
  title: {
    fontSize: {
      base: "25px",
      lg: "45px",
    },
    fontWeight: "bold",
    color: "#110D60",
    lineHeight: {
      base: "35px",
      lg: "50px",
    },
    width: {
      base: "100%",
      lg: "650px",
    },
  },
  text: {
    fontSize: "16px",
    color: "#110D60",
    lineHeight: "26px",
    width: {
      base: "100%",
      lg: "650px",
    },
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
    marginTop: "60px",
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
