const ENV = process.env

interface IConfig {
  baseUrl?: string;
}

const Config: IConfig = {
  baseUrl: ENV.REACT_APP_BASE_URL,

  // common config
}

export default Config
