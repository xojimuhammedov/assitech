import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import ProductOne from "../../../assets/product1.jpg";
import ProductTwo from "../../../assets/product2.png";
import ProductThree from "../../../assets/product3.png";
import ProductFour from "../../../assets/product4.jpg";
import ProductFive from "../../../assets/product5.png";
import ProductSix from "../../../assets/product6.jpg";
import { Link } from "react-router-dom";

function Products() {
  return (
    <Box id="product" className="product" mt={"220px"}>
      <Box className="container">
        <Flex mb={"30px"} gap={"25px"} align={"center"}>
          <Heading {...css.title}>Новинки</Heading>
          <Heading {...css.title}>Акции</Heading>
          <Heading {...css.title}>События</Heading>
        </Flex>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper product-swiper">
          <SwiperSlide>
            <Link to={"/product/1"}>
              <Box {...css.item}>
                <Text {...css.name}>
                  Низкотемпературный плазменный стерилизатор RENO – S130
                </Text>
                <Image {...css.image} src={ProductOne} />
                <Flex justifyContent={"space-between"} align={"center"}>
                  <Text {...css.subname}>Renosem</Text>
                  <Text {...css.price}>от 55 000 ye</Text>
                </Flex>
              </Box>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/product/2"}>
              <Box {...css.item}>
                <Text {...css.name}>
                  Анализатор cостава тела человека и содержания жировой/мышечной
                  массы тела «Inbody 970».
                </Text>
                <Image {...css.image} src={ProductTwo} />
                <Flex justifyContent={"space-between"} align={"center"}>
                  <Text {...css.subname}>InBody</Text>
                  <Text {...css.price}>от 27 000 ye</Text>
                </Flex>
              </Box>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/product/3"}>
              <Box {...css.item}>
                <Text {...css.name}>Фетальный монитор SONICAID Team 3</Text>
                <Image {...css.image} src={ProductThree} />
                <Flex justifyContent={"space-between"} align={"center"}>
                  <Text {...css.subname}>Huntleigh</Text>
                  <Text {...css.price}>от 16 000 ye</Text>
                </Flex>
              </Box>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/product/4"}>
              <Box {...css.item}>
                <Text {...css.name}>
                  Система диагностическая ультразвуковая стационарная V6.
                </Text>
                <Image {...css.image} src={ProductFour} />
                <Flex justifyContent={"space-between"} align={"center"}>
                  <Text {...css.subname}>Samsung Medison</Text>
                  <Text {...css.price}>от 42 000 ye</Text>
                </Flex>
              </Box>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/product/5"}>
              <Box {...css.item}>
                <Text {...css.name}>
                  Система диагностическая ультразвуковая V7.
                </Text>
                <Image {...css.image} src={ProductFive} />
                <Flex justifyContent={"space-between"} align={"center"}>
                  <Text {...css.subname}>Samsung</Text>
                  <Text {...css.price}>от 61 500 ye</Text>
                </Flex>
              </Box>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/product/6"}>
              <Box {...css.item}>
                <Text {...css.name}>
                  Анализатор состава тела человека InBody S10
                </Text>
                <Image {...css.image} src={ProductSix} />
                <Flex justifyContent={"space-between"} align={"center"}>
                  <Text {...css.subname}>InBody</Text>
                  <Text {...css.price}>от 11 700 ye</Text>
                </Flex>
              </Box>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}

export default Products;

const css = {
  title: {
    fontSize: "50px",
    lineHeight: "55px",
    fontFamily: "Unbounded !important",
    color: "gray",
    transition: "0.3s ease",

    _hover: {
      color: "#C3242A",
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "contain",
    padding: "10px 0",
  },
  item: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    background: "rgb(255, 255, 255)",
    padding: "20px",
    height: "450px",
  },
  name: {
    color: "#C3242A",
    fontSize: "16px",
    lineHeight: "25px",
    padding: "8px 0",
    fontWeight: "bold",
  },
  subname: {
    color: "gray",
    fontSize: "16px",
    lineHeight: "25px",
    padding: "8px 0",
    position: "absolute",
    bottom: "10px",
  },
  price: {
    color: "#C3242A",
    fontSize: "16px",
    lineHeight: "25px",
    fontWeight: "bold",
    position: "absolute",
    bottom: "15px",
    right: "10px",
  },
};
