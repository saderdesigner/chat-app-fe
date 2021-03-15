import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export default function useLogin(authUser) {
  const { userName, password } = authUser;

  axios
    .post(`${apiUrl}login?userName=${userName}&password=${password}`)
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("Can not Auth! Please try again..."));
}
