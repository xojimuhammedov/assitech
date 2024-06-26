import { Box, Flex } from "@chakra-ui/react";
import Instagram from "../../assets/svg/Instagram";
import Telegram from "../../assets/svg/Telegram";
import Facebook from "../../assets/svg/Facebook";
import { Link as LinkChakra } from "@chakra-ui/react";
import YouTube from "../../assets/svg/YouTube";
import TimeOut from "./../TimeOut";

function Nav() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Flex className="nav" justifyContent="flex-end">
          <Flex className="nav-list" gap="20px" align="center">
            <LinkChakra
              {...css.social}
              target="_blank"
              href="https://www.instagram.com/alstar.uz">
              <Instagram height={16} width={16} />
            </LinkChakra>
            <LinkChakra
              target="_blank"
              {...css.social}
              href="https://t.me/AlstarDibond">
              <Telegram height={16} width={16} />
            </LinkChakra>
            <LinkChakra
              target="_blank"
              {...css.social}
              href="https://www.facebook.com/profile.php?id=61553429155300">
              <Facebook height={16} width={16} />
            </LinkChakra>
            <LinkChakra
              {...css.social}
              target="_blank"
              href="https://www.youtube.com/@uzbekistanalstar4978">
              <YouTube height={18} width={20} />
            </LinkChakra>
            <a className="nav-link nav-links" href="tel:+998946690006">
              +998 94 669 00 06
            </a>
            <TimeOut />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Nav;

const css = {
  box: {
    background: "#2E3A6B",
    padding: "10px 0",
  },
  social: {
    display: {
      xl: "block",
      lg: "block",
      md: "block",
      sm: "none",
      base: "none",
    },
  },
};
