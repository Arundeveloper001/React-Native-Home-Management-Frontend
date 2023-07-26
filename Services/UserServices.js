import http from "./Https";
const SignupUrl = "register";
const LoginUrl = "login";

const register = (data) => {
  // console.log("data====>",data);
  return http.Post(SignupUrl, data); 
};
const login = (data) => {
  return http.Post(LoginUrl, data);
};

export default {
  register: register,
  login:login
};

