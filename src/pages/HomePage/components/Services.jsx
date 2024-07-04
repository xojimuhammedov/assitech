import { Box, Heading, Image, Text } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import ProductOne from "../../../assets/services.jpg";
import ProductTwo from "../../../assets/services2.jpg";
import ProductThree from "../../../assets/services3.jpg";
import ProductFour from "../../../assets/services4.jpg";
import ProductFive from "../../../assets/services5.jpg";
import ProductSix from "../../../assets/servies6.jpg";
import ProductSeven from "../../../assets/services7.jpg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <Box className="product" p={"50px 0"}>
      <Box className="container">
        <Heading {...css.title}>
          {" "}
          <b style={{ color: "#C3242A" }}>Сопровождаем</b> клиента на всех
          этапах
        </Heading>
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
          className="mySwiper">
          <SwiperSlide>
            <Link to={"/service/1"}>
              <Box {...css.item}>
                <Text {...css.name}>Сервис</Text>
                <Image {...css.image} src={ProductOne} />
              </Box>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/service/2"}>
              <Box {...css.item}>
                <Text {...css.name}>Производство</Text>
                <Image {...css.image} src={ProductTwo} />
              </Box>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/service/3"}>
              <Box {...css.item}>
                <Text {...css.name}>Комплексное оснащение</Text>
                <Image {...css.image} src={ProductThree} />
              </Box>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/service/4"}>
              <Box {...css.item}>
                <Text {...css.name}>Лизинг</Text>
                <Image {...css.image} src={ProductFour} />
              </Box>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/service/5"}>
              <Box {...css.item}>
                <Text {...css.name}>Trade-in</Text>
                <Image {...css.image} src={ProductFive} />
              </Box>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/service/6"}>
              <Box {...css.item}>
                <Text {...css.name}>Обучение</Text>
                <Image {...css.image} src={ProductSix} />
              </Box>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/service/7"}>
              <Box {...css.item}>
                <Text {...css.name}>ProVisio</Text>
                <Image {...css.image} src={ProductSeven} />
              </Box>
            </Link>
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
