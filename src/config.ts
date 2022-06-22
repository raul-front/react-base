const ENV = process.env
console.log('env', ENV)
export default {
  baseUrl: ENV.REACT_APP_BASE_URL,

  // common config
}
