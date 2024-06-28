import { Box, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import SliderFour from "../../../assets/header4.jpg";

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
          className="mySwiper header-swiper">
          <SwiperSlide>
            <Image {...css.image} src={SliderFour} />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  image: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    objectFit: "cover",
    height: "550px",
    borderRadius: "20px",
  },
};
