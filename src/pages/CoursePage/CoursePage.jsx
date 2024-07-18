import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import CourseVideoOne from "../../assets/course1.mp4";
import CourseVideoTwo from "../../assets/course2.mp4";
import CourseVideoThree from "../../assets/course4.mp4";

function CoursePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
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

        <Flex
          mt={"15px"}
          flexDirection={{ base: "column", md: "row" }}
          gap={"30px"}>
          <video className="course-video" ref={videoRef} loop muted controls>
            <source src={CourseVideoOne} type="video/mp4" />
          </video>
          <Box>
            <Heading {...css.subname}>Курс «Нейросонография»</Heading>{" "}
            <Text {...css.text} mt={"15px"}>
              Хусанбаева Дёра Давроновна. Врач клиники Альфраганус УТТ.
              Стажировки в зарубежных странах: Корея, Германия, Турция, Индия.
            </Text>
            <Heading {...css.courseName}>Цель курса</Heading>
            <Text {...css.text} mt={"15px"}>
              - Освоение техники переноса НСГ
            </Text>
            <Text {...css.text} mt={"15px"}>
              - понять нормальную ультразвуковую анатомию мозга у доношенных и
              недоношенных детей.
            </Text>
            <Text {...css.text} mt={"15px"}>
              - Допплерография
            </Text>
            <Text {...css.text} mt={"15px"}>
              - Определение патологии головного мозга
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: "column", md: "row" }}
          mt={"15px"}
          gap={"30px"}>
          <video className="course-video" ref={videoRef} loop muted controls>
            <source src={CourseVideoThree} type="video/mp4" />
          </video>
          <Box>
            <Heading {...css.subname}>ГИНЕКОЛОИЯ И АКУШЕРСТВО: </Heading>{" "}
            <Text {...css.text} mt={"15px"}>
              С нашем преподавателем Диёра Давроновна.
            </Text>
            <Heading {...css.courseName}>Цель курса</Heading>
            <Text {...css.text} mt={"15px"}>
              - Техника проведения УЗИ в акушерстве и гинекологии
            </Text>
            <Text {...css.text} mt={"15px"}>
              - Нормальная УЗИ анатомия и физиология репродуктивной системы
            </Text>
            <Text {...css.text} mt={"15px"}>
              - Особенности гинекологического УЗИ у детей и у женщин в
              постменопаузе
            </Text>
            <Text {...css.text} mt={"15px"}>
              - Патология матки и придатков
            </Text>
            <Text {...css.text} mt={"15px"}>
              - УЗИ при беременности, в том числе и многоплодной
            </Text>
            <Text {...css.text} mt={"15px"}>
              - Проведение скрининга и допплера у беременных
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: "column", md: "row" }}
          mt={"15px"}
          gap={"30px"}>
          <video className="course-video" ref={videoRef} loop muted controls>
            <source src={CourseVideoTwo} type="video/mp4" />
          </video>
          <Box>
            <Heading {...css.subname}>
              Курс «базовая эхокардиография у взрослых»
            </Heading>{" "}
            <Text {...css.text} mt={"15px"}>
              ООО ASSITECH совместно с командой HEART TEAM начинаем новый курс.
            </Text>
            <Heading {...css.courseName}>Цель курса</Heading>
            <Text {...css.text} mt={"15px"}>
              - эхоанатомия и гемодинамика сердца, позиции, основные режимы в
              ЭхоКГ
            </Text>
            <Text {...css.text} mt={"15px"}>
              - количественная оценка камер сердца. Оценка систолической функции
              ЛЖ и ПЖ
            </Text>
            <Text {...css.text} mt={"15px"}>
              -POCUS эхокардиография в ургентных ситуациях: ОИМ, тампонада
              сердца, тромбоэмболия легочных артерий и тд.
            </Text>
            <Text {...css.text} mt={"15px"}>
              - клапанные патологии и их оценка по последным рекомендациям
            </Text>
          </Box>
        </Flex>
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
