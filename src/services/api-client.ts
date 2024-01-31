import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key : 'e0b10158083f4fe480d24b9d696d0b48'
  }
})