import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function ButtonForm({
  numberValue,
  nameValue,
  textValue,
  width,
  onClose,
  handleClear,
}) {
  const { t } = useTranslation();
  let bot = {
    TOKEN: "6723934365:AAEqNFMcuVaaLYOT7Dj-lBEBtgTwUdE0ogw",
    chatID: "-1002064336590",
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
          onClose();
        }
        // window.location.reload();
        toast.success("Sizning xabaringiz muvaffaqiyatli yuborildi!");
        onClose();
      },
      () => {}
    );
  }
  return (
    <Button type="submit" width={width} onClick={sendMessage} {...css.button}>
      {t("Yuborish")}
    </Button>
  );
}

export default ButtonForm;

const css = {
  button: {
    background: "#C3242A !important",
    color: "#fff",
    fontWeight: "500 !important",
    height: "45px",
  },
};
