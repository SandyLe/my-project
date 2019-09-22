import HttpRequest from '../lib/axios'
const baseUrl = 'http://localhost:8082/demo/api/'

const axios = new HttpRequest(baseUrl)
export default axios
