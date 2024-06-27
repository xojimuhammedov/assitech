import { Box, Heading } from "@chakra-ui/react";
import BgImage from "../../../assets/bg.jpg";

function Main() {
  return (
    <Box {...css.main}>
      <Box className="container">
        <Heading {...css.title}>О компании</Heading>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  main: {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    height: "240px",
    margin: "15px 0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    letterSpacing: "1.5px",
    fontSize: "45px",
    lineHeight: "50px", 
  },
};
