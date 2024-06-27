import { Box, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import SliderOne from "../../../assets/header1.png";
import SliderTwo from "../../../assets/header2.png";
import SliderThree from "../../../assets/header3.png";

function Header() {
  return (
    <Box>
      <Box className="container">
        <Swiper
          loop={true}
          effect="fade"
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          keyboard={true}
          modules={[Autoplay, EffectFade]}
          className="mySwiper">
          <SwiperSlide>
            <Image {...css.image} src={SliderOne} />
          </SwiperSlide>
          <SwiperSlide>
            <Image {...css.image} src={SliderTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <Image {...css.image} src={SliderThree} />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  image: {
    height: {
      base: "330px",
      md: "600px",
    },
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    objectFit: {
      base: "cover",
      md: "contain",
    },
  },
};
