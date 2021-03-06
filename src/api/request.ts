import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import config from '@/config'

interface ResponseData<T>{
  code: number;
  data: T;
  message: string;
}

const request = axios.create({
  baseURL: config.baseUrl,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// request interceptors
request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, (error: AxiosError) => {
  return Promise.reject(error)
})

// response interceptors
request.interceptors.response.use((response: AxiosResponse<ResponseData<any>>) => {
  const { data } = response
  if (data.code === 200) {
    return data.data
  } else {
    // ElNotification.error({ title: 'Error', message: data.message })
    return Promise.reject(data.message)
  }
}, error => {
  let msg = ''
  if (error.response) {
    if (error.response.status === 401) { // no login
      toLogin()
      return
    }
    if (error.response.data && error.response.data.message) {
      msg = error.response.data.message
    } else {
      msg = error.response.data
    }
  } else {
    msg = error.message
  }
  if (msg !== 'not login') {
    // global error
    console.log('api error', msg)
    // ElNotification.error({ title: 'Error', message: msg })
  }
  // console.log('api response error: ', msg)
  console.log('api response error: ', error)
  return Promise.reject(msg)
})

export const toLogin = () => {
  const msg = 'Login information has expired, please login again.'
  // ElNotification.error({ title: 'Error', message: msg })
  // goPath('login')
}
export const _get = (url: string, query: any): Promise<any> => {
  return request.get(url, { params: query })
}
export const _download = (url: string, query: any): Promise<any> => {
  return request.get(url, { params: query, responseType: 'blob' })
}
export const _post = (url: string, body: any): Promise<any> => {
  return request.post(url, body)
}
export const _upload = (url: string, data: any, config: any = null): Promise<any> => {
  return request.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' }, ...config })
}
export const _patch = (url: string, body: any): Promise<any> => {
  return request.patch(url, body)
}
export const _put = (url: string, body: any): Promise<any> => {
  return request.put(url, body)
}
export const _delete = (url: string): Promise<any> => {
  return request.delete(url)
}
