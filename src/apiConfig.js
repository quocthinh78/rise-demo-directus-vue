import axios from "axios"
const apiConfig = (method, url, data = {}) => {
  return axios({
    method: method, //you can set what request you want to be
    url: url,
    data: data ? data : {},
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem("rise_token")
    }
  })
}
export default apiConfig