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
              href="https://www.instagram.com/assitechbio">
              <Instagram height={16} width={16} />
            </LinkChakra>
            <LinkChakra
              target="_blank"
              {...css.social}
              href="https://t.me/UZD_sistemi">
              <Telegram height={16} width={16} />
            </LinkChakra>
            <LinkChakra
              target="_blank"
              {...css.social}
              href="https://www.facebook.com/rahmat.kham8?mibextid=ZbWKwL">
              <Facebook height={16} width={16} />
            </LinkChakra>
            <a className="nav-link nav-links" href="tel:+998998159885">
              +998 99 815 98 85
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
