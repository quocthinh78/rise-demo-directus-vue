import axios from "axios"
const apiConfig = (method, url, token, data = {}) => {
  return axios({
    method: method, //you can set what request you want to be
    url: url,
    data: data ? data : {},
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}
export default apiConfig