import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.email;
      console.log(email);
      if(email){
        const { data } = await axios.post("https://obscure-taiga-87074.herokuapp.com/login", {
            email,
          });
          localStorage.setItem("accessToken", data.accessToken);
          setToken(data.accessToken)
        };
      }
    getToken()
  }, [user]);
  return [token]
};
export default useToken;
