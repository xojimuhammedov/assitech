import { useParams } from "react-router-dom";
import { serviceData } from "../../../data";
import { Box, Heading } from "@chakra-ui/react";

function Header() {
  const { id } = useParams();
  const about = serviceData;
  const aboutData = about.find((item) => item.id === Number(id));

  return (
    <Box backgroundImage={`url(${aboutData?.image})`} {...css.box}>
      <Box className="container">
        <Heading {...css.title}>{aboutData?.title}</Heading>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  box: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "450px",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)",
    },
  },
  title: {
    position: "absolute",
    top: "70%",
    fontSize: "55px",
    lineHeight: "60px",
    color: "white",
    fontFamily: "Unbounded !important",
  },
};
