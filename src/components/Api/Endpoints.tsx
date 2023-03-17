import axios from "axios";
import { userData } from "../AllInterface/AllInterface";

const localURL: string = "http://localhost:8000/api/clientauth";
// const liveURI = "https://serversideoncwm.onrender.com/"

export interface login {
  email: string;
  password: string;
}

export const createClient = async ({
  name,
  email,
  password,
  phoneNumber,
  address,
}: userData) => {
  return await axios
    .post(`${localURL}/clientregister`, {
      name,
      email,
      password,
      phoneNumber,
      address,
    })
    .then((res) => res.data);
};

export const loginClient = async ({ email, password }: login) => {
  return await axios
    .post(`${localURL}/clientlogin`, { email, password })
    .then((res) => res.data);
  // .catch((err) => console.log(`this is api consumption error`, err));
};

// ("http://localhost:8000/api/adminauth/adminlogin/");