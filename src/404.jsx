import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 3 soniyadan keyin avvalgi sahifaga qaytarish
    setTimeout(() => {
      navigate(-1); // "-1" orqali avvalgi sahifaga qaytish
    }, 3000);
  }, [navigate]);

  return;
};

export default NotFound;
