import http from "./Https";
const AddEmployeeUrl = "addEmployee";
const GetEmployeesUrl = "getEmployees"
const DeleteEmployeeUrl = "deleteEmployee/"
const UpdateEmployeeUrl = "updateEmployee/"
const RatingsUrl = "reviews/"
const OtpSendUrl = "mailer/generateOTP"
const OtpVerifyUrl = "mailer/verifyotp"
const EmployeeLoginUrl = "employeeLogin"
// const LoginUrl = "login";

const EmployeeLogin = (data) => {
    return http.Post(EmployeeLoginUrl, data);
  };
const addEmployees = (data) => {
    // console.log("data====>",data);
    return http.Post(AddEmployeeUrl, data);
};
const getEmployees = (data) => {
    return http.Get(GetEmployeesUrl, data);
};
const deleteEmployee = (data) => {    
    let deleteUrl = `${DeleteEmployeeUrl}${data}`;
    return http.Post(deleteUrl);
};
const updateEmployee = (data, id) => {
    // console.log("data",data);
    let UpdateUrl = `${UpdateEmployeeUrl}${id}`;
    return http.Post(UpdateUrl, data);
  };
const ratings = (data) => {
    //  console.log("data========>",data);
    let reviewsUrl = `${RatingsUrl}${data.user_id}`;
    // console.log("reviewsUrl",reviewsUrl);
    return http.Post(reviewsUrl,data);
}
const otpSend = (data) => {
    // console.log("data====>",data);
    return http.Post(OtpSendUrl, data);
};

const otpVerify = (data) => {
    console.log("data====>",data.otp);
    return http.Post(OtpVerifyUrl, data);
};

export default {
    addEmployees: addEmployees,
    getEmployees:getEmployees,
    deleteEmployee:deleteEmployee,
    updateEmployee:updateEmployee,
    ratings:ratings,
    otpSend:otpSend,
    otpVerify:otpVerify,
    EmployeeLogin:EmployeeLogin
    //   login:login
};
