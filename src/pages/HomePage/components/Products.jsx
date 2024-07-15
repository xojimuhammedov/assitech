import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// import ProductOne from "../../../assets/product1.jpg";
// import ProductTwo from "../../../assets/product2.png";
// import ProductThree from "../../../assets/product3.png";
// import ProductFour from "../../../assets/product4.jpg";
// import ProductFive from "../../../assets/product5.png";
// import ProductSix from "../../../assets/product6.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function Products() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [t, i18n] = useTranslation();

  useEffect(() => {
    axios
      .get("https://v1.centurysilkroadtravel.uz/api/categories/")
      .then((res) => setCategory(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://v1.centurysilkroadtravel.uz/api/products/")
      .then((res) => {
        setProducts(
          res.data.data.filter((evt) => evt.category_id === categoryId)
        );
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);
  return (
    <Box id="product" className="product" mt={"220px"}>
      <Box className="container">
        <Flex mb={"30px"} gap={"25px"} align={"center"}>
          {category.map((item, index) => (
            <Heading
              onClick={() => setCategoryId(item.id)}
              key={index}
              {...css.title}>
              {item[`name_${i18n?.language}`]}
            </Heading>
          ))}
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
          breakpoints={{
            350: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper product-swiper">
          {products.length > 0
            ? products.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link to={`/product/${item?.id}`}>
                    <Box {...css.item}>
                      <Text {...css.name}>
                        {item[`title_${i18n?.language}`]}
                      </Text>
                      <Image
                        {...css.image}
                        src={`https://v1.centurysilkroadtravel.uz/api/uploads/images/${item?.image_src}`}
                      />
                    </Box>
                  </Link>
                </SwiperSlide>
              ))
            : data.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link to={`/product/${item?.id}`}>
                    <Box {...css.item}>
                      <Text {...css.name}>
                        {item[`title_${i18n?.language}`]}
                      </Text>
                      <Image
                        {...css.image}
                        src={`https://v1.centurysilkroadtravel.uz/api/uploads/images/${item?.image_src}`}
                      />
                    </Box>
                  </Link>
                </SwiperSlide>
              ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Products;

const css = {
  title: {
    fontSize: {
      base: "20px",
      lg: "40px",
    },
    lineHeight: {
      base: "25px",
      lg: "45px",
    },
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
    height: "380px",
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
