import { Box, Heading, Image, Text } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import ProductOne from "../../../assets/services.jpg";

function Services() {
  return (
    <Box p={"50px 0"}>
      <Box className="container">
        <Heading {...css.title}>
          {" "}
          <b style={{ color: "#C3242A" }}>Сопровождаем</b> клиента на всех
          этапах
        </Heading>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
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
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box {...css.item}>
              <Text {...css.name}>
                Низкотемпературный плазменный стерилизатор RENO – S130
              </Text>
              <Image {...css.image} src={ProductOne} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box {...css.item}>
              <Text {...css.name}>
                Низкотемпературный плазменный стерилизатор RENO – S130
              </Text>
              <Image {...css.image} src={ProductOne} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box {...css.item}>
              <Text {...css.name}>
                Низкотемпературный плазменный стерилизатор RENO – S130
              </Text>
              <Image {...css.image} src={ProductOne} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box {...css.item}>
              <Text {...css.name}>
                Низкотемпературный плазменный стерилизатор RENO – S130
              </Text>
              <Image {...css.image} src={ProductOne} />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box {...css.item}>
              <Text {...css.name}>
                Низкотемпературный плазменный стерилизатор RENO – S130
              </Text>
              <Image {...css.image} src={ProductOne} />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}

export default Services;

const css = {
  title: {
    fontSize: "50px",
    lineHeight: "55px",
    fontFamily: "Unbounded !important",
    color: "#110D60",
    transition: "0.3s ease",
    width: "850px",

    _hover: {
      color: "#C3242A",
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
    objectFit: "cover",
    height: "100%",
  },
  item: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    background: "rgb(255, 255, 255)",
  },
  name: {
    color: "#C3242A",
    fontSize: "16px",
    lineHeight: "25px",
    position: "relative",
    top: "300px",
    left: "10px",
    fontWeight: "bold",
    fontFamily: "Unbounded !important",
  },
};
