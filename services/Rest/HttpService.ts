import Axios from 'axios'

export default class HttpService {
  constructor (config) {
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    this.$axios = Axios.create({
      ...config,
      headers: {
        ...config.headers,
        ...this.headers
      }
    })
  }
}
