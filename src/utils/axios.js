import axios from "axios";
const Axios = axios.create({
  baseURL: "https://devbw-mobilesite-api.yplatformctl.com/",
});
export default Axios;
