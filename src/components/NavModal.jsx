import {
  Flex,
  Image,
  Link,
  Modal,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Instagram from "../assets/svg/Instagram";
import Telegram from "../assets/svg/Telegram";
import Facebook from "../assets/svg/Facebook";
import { useNavigate } from "react-router-dom";

function NavModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <button onClick={onOpen} className="modal-open-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="25"
          viewBox="0 0 27 25">
          <path
            fill="#FFF"
            d="M2.5 0h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5zm0 10h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5zm0 10h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5z"></path>
        </svg>
      </button>

      <Modal {...css.list} isOpen={isOpen} onClose={onClose}>
        <ModalContent {...css.box}>
          <button onClick={onClose} className="modal-close-button">
            <Image
              src="https://inoutads.uz/_nuxt/x.3b0dd5ca.svg"
              alt=""
              w="25px"
              h="25px"
            />
          </button>
          <Flex mt="50px" gap="25px" flexDirection="column">
            <Link
              onClick={() => {
                navigate("/");
                onClose();
              }}
              {...css.link}
              href="#about">
              {t("About Us")}
            </Link>
            <Link
              onClick={() => {
                navigate("/");
                onClose();
              }}
              {...css.link}
              href="#product">
              {t("Projects")}
            </Link>
            <Link
              onClick={() => {
                navigate("/");
                onClose();
              }}
              {...css.link}
              href="#news">
              {t("News")}
            </Link>
            <Link
              onClick={() => {
                navigate("/");
                onClose();
              }}
              {...css.link}>
              {t("Contact")}
            </Link>

            <Link
              onClick={() => {
                navigate("/instal");
                onClose();
              }}
              {...css.link}>
              {t("Установка")}
            </Link>
            <Flex gap="10px 25px">
              <Link
                {...css.social}
                href="https://www.instagram.com/assitechbio">
                <Instagram height={26} width={26} />
              </Link>
              <Link {...css.social} href="https://t.me/UZD_sistemi">
                <Telegram height={26} width={26} />
              </Link>
              <Link
                {...css.social}
                href="https://www.facebook.com/rahmat.kham8?mibextid=ZbWKwL">
                <Facebook height={26} width={26} />
              </Link>
            </Flex>
            <Link {...css.link} href="tel: +998998159885">
              +998 99 815 98 85
            </Link>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavModal;

const css = {
  link: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "26px",
    letterSpacing: "0.8px",
    fontStyle: "normal",
    transition: "0.3s all",
    color: "#fff",
  },
  box: {
    background: "#2E3A6B",
    height: "100vh !important",
    width: "85%",
    top: "-65px",
    right: 0,
    padding: "20px 0 0 40px",
    position: "fixed",
  },
  list: {
    right: 0,
  },
};
