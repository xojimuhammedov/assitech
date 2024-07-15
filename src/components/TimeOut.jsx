import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalContent,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ButtonForm from "./Button";
import { useTranslation } from "react-i18next";

function TimeOut() {
  const { t } = useTranslation();
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    setNameValue("");
    setNumberValue("");
    setTextValue("");
  };

  return (
    <>
      <button className="timeout-modal" onClick={onOpen}>
        {t("Contact")}
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent {...css.list}>
          <Heading color="#2E3A6B" fontSize={'30px'} textAlign="center">
            {t("Bizga qanday savolingiz bor?")}
          </Heading>
          <form action="">
            <Box m="25px 0">
              <FormControl isRequired>
                <FormLabel {...css.label}> {t("Ism")}</FormLabel>
                <Input
                  value={nameValue}
                  onChange={(e) => changeName(e.target.value)}
                  {...css.input}
                  required
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
                    required
                    placeholder={t("Telefon raqami")}
                  />
                </InputGroup>
              </FormControl>
            </Box>
            <Box m="25px 0">
              <FormControl isRequired>
                <FormLabel {...css.label}> {t("Sizning xabaringiz")}</FormLabel>
                <Textarea
                  placeholder={t("Sizning xabaringiz")}
                  size="md"
                  {...css.textarea}
                  value={textValue}
                  onChange={(e) => changeText(e.target.value)}
                />
              </FormControl>
            </Box>
            <ButtonForm
              textValue={textValue}
              nameValue={nameValue}
              numberValue={numberValue}
              onClose={onClose}
              handleClear={handleClear}
              width="100%"
            />
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TimeOut;

const css = {
  label: {
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "22px",
  },
  input: {
    width: "100%",
    border: "1px solid gray",
    height: "48px !important",
  },
  textarea: {
    border: "1px solid gray",
    height: "120px",
  },
  list: {
    padding: "15px",
  },
};
