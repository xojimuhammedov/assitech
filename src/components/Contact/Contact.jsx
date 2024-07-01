import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputLeftElement,
  Textarea,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PhoneIcon } from "@chakra-ui/icons";

import Adress from "../../assets/adres.jpg";
import Phone from "../../assets/phone.jpg";
import Pochta from "../../assets/pochta.jpg";
import Hour from "../../assets/hour.jpg";

function Contact() {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");

  function changeNumber(item) {
    setNumberValue(item);
  }

  function changeName(item) {
    setNameValue(item);
  }
  function changeText(item) {
    setTextValue(item);
  }

  const handleClear = () => {
    setNameValue(null);
    setNumberValue(null);
    setTextValue(null);
  };
  let bot = {
    TOKEN: "6765528514:AAG32y-OX4yj8JLVO9ixso8jp7WZ8Khx4LA",
    chatID: "-1002195363967",
    message: `
          Assalomu alaykum sizga yangi xabar!%0A
          %0AIsmi 👤: ${nameValue}; 
          %0ATelefon raqami ☎: ${numberValue};
          %0ASizga xabar ☎: ${textValue};`,
  };

  function sendMessage(e) {
    e.preventDefault();

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
      {
        method: "GET",
      }
    ).then(
      (success) => {
        if (success.status === 200) {
          handleClear();
        }
        window.location.reload();
        // toast.success("Sizning xabaringiz muvaffaqiyatli yuborildi!");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  const { t } = useTranslation();
  return (
    <Box id="contact" p={"35px 150px"}>
      <Box className="container">
        <Flex
          flexDirection={{
            xl: "row",
            lg: "row",
            md: "column-reverse",
            sm: "column-reverse",
            base: "column-reverse",
          }}
          {...css.list}>
          <Box {...css.left}>
            <Heading {...css.title}>{t("Контактная информация")}</Heading>
            <Text {...css.text}>
              {t(
                "Вы можете получить больше информации с помощью этих контактных данных"
              )}
            </Text>
            <Flex m={"10px 0"} gap={"20px"} align={"center"}>
              <Image src={Adress} />
              <Text {...css.link}>
                86 Tursunzoda street, Yangihayot region, Tashkent, Uzbekistan
              </Text>
            </Flex>
            <Flex m={"10px 0"} gap={"20px"} align={"center"}>
              <Image src={Pochta} />
              <Text {...css.link}>Assitechbio@gmail.com</Text>
            </Flex>
            <Flex m={"10px 0"} gap={"20px"} align={"center"}>
              <Image src={Phone} />
              <Text {...css.link}> +998 95 843 77 17</Text>
            </Flex>
            <Flex m={"10px 0"} gap={"20px"} align={"center"}>
              <Image src={Hour} />
              <Text {...css.link}>Пн-Пт с 09:00 до 18:00 Ташкент</Text>
            </Flex>
          </Box>
          <Box
            {...css.right}
            width={{ xl: "50%", md: "80%", sm: "90%", base: "100%" }}>
            <Heading {...css.title}>{t("Bizga qanday savolingiz bor?")}</Heading>
            <form action="">
              <Box m="25px 0">
                <FormControl isRequired>
                  <FormLabel {...css.label}>
                    {" "}
                    {t("Ismingizni kiriting")}
                  </FormLabel>
                  <Input
                    value={nameValue}
                    onChange={(e) => changeName(e.target.value)}
                    {...css.input}
                    placeholder={t("Ismingizni kiriting")}
                  />
                </FormControl>
              </Box>
              <Box m="25px 0">
                <FormControl isRequired>
                  <FormLabel {...css.label}> {t("Telefon raqami")}</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <PhoneIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      {...css.input}
                      value={numberValue}
                      onChange={(e) => changeNumber(e.target.value)}
                      size="md"
                      type="tel"
                      placeholder={t("Telefon raqami")}
                    />
                  </InputGroup>
                </FormControl>
              </Box>
              <Box m="25px 0">
                <FormControl isRequired>
                  <FormLabel {...css.label}>
                    {" "}
                    {t("Sizning xabaringiz")}
                  </FormLabel>
                  <Textarea
                    placeholder={t("Sizning xabaringiz")}
                    size="md"
                    {...css.textarea}
                    value={textValue}
                    onChange={(e) => changeText(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Button type="submit" onClick={sendMessage} {...css.button}>
                {t("Yuborish")}
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Contact;

const css = {
  image: {
    width: "600px",
  },
  title: {
    fontSize: "30px",
    lineHeight: "35px",
    fontWeight: 600,
    color: "#fff",
    textAlign: "center",
  },
  label: {
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "22px",
    color: "white",
  },
  input: {
    width: { xl: "100%", lg: "100%", md: "100%", sm: "100%", base: "100%" },
    border: "1px solid white",
    height: "48px !important",

    _placeholder: {
      color: "white",
    },
  },
  textarea: {
    border: "1px solid white",
    height: "120px",
    _placeholder: {
      color: "white",
    },
  },
  button: {
    background: "#fff !important",
    color: "#8a2be2",
    fontWeight: "600 !important",
    height: "45px",
    transition: "0.3s all ease",
    fontSize: "18px",
    lineHeight: "24px",
    borderRadius: "20px",
    cursor: "pointer",
    border: "1px solid #8a2be2",
    width: "100%",
  },
  left: {
    backgroundColor: "#1E2E3E",
    padding: {
      base: "20px 10px",
      md: "20px 70px",
    },
  },
  right: {
    backgroundColor: "#8A2BE2",
    padding: {
      base: "20px 10px",
      md: "23px 70px",
    },
  },
  link: {
    color: "white",
    fontSize: "16px",
    lineHeight: "24px",
    width: {
      base: "100%",
      md: "60%",
    },
  },
  text: {
    color: "white",
    textAlign: "center",
    width: "100%",
    margin: "20px 0",
    lineHeight: "25px",
    fontSize: {
      base: "16px",
      md: "18px",
    },
  },
};
