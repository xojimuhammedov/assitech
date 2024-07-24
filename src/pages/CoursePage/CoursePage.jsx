import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function CoursePage() {
  const videoRef = useRef(null);
  const [course, setCourse] = useState([]);
  const [t, i18n] = useTranslation();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://v1.centurysilkroadtravel.uz/api/hotels/")
      .then((res) => setCourse(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box p={"30px 0"}>
      <Box className="container">
        <Heading {...css.title}>Курсы, которые у нас есть</Heading>
        <Text {...css.name}>НЕЙРОСОНОГРАФИЯ</Text>
        <Text {...css.name}>ВЗРОСЛАЯ ЭХОКАРДИОГРАФИЯ</Text>
        <Text {...css.name}>ДЕТСКАЯ ЭХОКАРДИОГРАФИЯ </Text>
        <Text {...css.name}>АКУШЕРСТВО И ГИНЕКОЛОГИЯ</Text>
        <Text {...css.name}>ФЕТАЛЬНАЯ ЭХОКАРДИОГРАФИЯ</Text>

        {course.map((item, index) => (
          <Flex
            key={index}
            mt={"15px"}
            flexDirection={{ base: "column", md: "row" }}
            gap={"30px"}>
            <video className="course-video" ref={videoRef} loop muted controls>
              <source
                src={`https://v1.centurysilkroadtravel.uz/api/uploads/images/${item?.hotel_images[0]?.image_src}`}
                type="video/mp4"
              />
            </video>
            <Box>
              <Heading mb={"15px"} {...css.subname}>
                {item[`name_${i18n?.language}`]}
              </Heading>{" "}
              <p
                className="course-title"
                dangerouslySetInnerHTML={{
                  __html: item[`text_${i18n?.language}`],
                }}
              />
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}

export default CoursePage;

const css = {
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
    marginBottom: "50px",
  },
  name: {
    fontSize: {
      base: "18px",
      md: "20px",
    },
    lineHeight: "28px",
    margin: "10px 0",
    cursor: "pointer",
  },
  subname: {
    fontSize: {
      base: "25px",
      lg: "45px",
    },
    fontWeight: "600",
    color: "#C3242A",
    lineHeight: {
      base: "35px",
      lg: "50px",
    },
  },
  text: {
    fontSize: {
      base: "16px",
      md: "20px",
    },
    lineHeight: "28px",
    margin: "10px 0",
  },
  courseName: {
    fontWeight: "500",
    fontSize: "26px",
    lineHeight: "35px",
    color: "#110D60",
    marginTop: "25px",
  },
};
