import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import ProductOne from "../../../assets/product1.jpg";

function Products() {
  return (
    <Box mt={"220px"}>
      <Box className="container">
        <Flex mb={"30px"} gap={"25px"} align={"center"}>
          <Heading {...css.title}>Новинки</Heading>
          <Heading {...css.title}>Акции</Heading>
          <Heading {...css.title}>События</Heading>
        </Flex>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <Box {...css.item}>
              <Text {...css.name}>
                Низкотемпературный плазменный стерилизатор RENO – S130
              </Text>
              <Image {...css.image} src={ProductOne} />
              <Flex justifyContent={"space-between"} align={"center"}>
                <Text {...css.name}>Renosem</Text>
                <Text {...css.price}>от 55 000 ye</Text>
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box {...css.item}>
              <Text {...css.name}>
                Низкотемпературный плазменный стерилизатор RENO – S130
              </Text>
              <Image {...css.image} src={ProductOne} />
              <Flex justifyContent={"space-between"} align={"center"}>
                <Text {...css.name}>Renosem</Text>
                <Text {...css.price}>от 55 000 ye</Text>
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box {...css.item}>
              <Text {...css.name}>
                Низкотемпературный плазменный стерилизатор RENO – S130
              </Text>
              <Image {...css.image} src={ProductOne} />
              <Flex justifyContent={"space-between"} align={"center"}>
                <Text {...css.name}>Renosem</Text>
                <Text {...css.price}>от 55 000 ye</Text>
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box {...css.item}>
              <Text {...css.name}>
                Низкотемпературный плазменный стерилизатор RENO – S130
              </Text>
              <Image {...css.image} src={ProductOne} />
              <Flex justifyContent={"space-between"} align={"center"}>
                <Text {...css.name}>Renosem</Text>
                <Text {...css.price}>от 55 000 ye</Text>
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box {...css.item}>
              <Text {...css.name}>
                Низкотемпературный плазменный стерилизатор RENO – S130
              </Text>
              <Image {...css.image} src={ProductOne} />
              <Flex justifyContent={"space-between"} align={"center"}>
                <Text {...css.name}>Renosem</Text>
                <Text {...css.price}>от 55 000 ye</Text>
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box {...css.item}>
              <Text {...css.name}>
                Низкотемпературный плазменный стерилизатор RENO – S130
              </Text>
              <Image {...css.image} src={ProductOne} />
              <Flex justifyContent={"space-between"} align={"center"}>
                <Text {...css.name}>Renosem</Text>
                <Text {...css.price}>от 55 000 ye</Text>
              </Flex>
            </Box>
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
  },
  name: {
    color: "gray",
    fontSize: "16px",
    lineHeight: "25px",
    padding: "8px 0",
  },
  price: {
    color: "#C3242A",
    fontSize: "16px",
    lineHeight: "25px",
    fontWeight: "bold",
  },
};
