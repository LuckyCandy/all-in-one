import axios from 'axios'
import { ElMessage } from 'element-plus'



// 创建axios实例
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 0 // 请求超时时间
})

const TOKEN_KEY = 'jnc-cd-token'


// request拦截器
http.interceptors.request.use(
  config => {
    if (config.url == '/file/upload') {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    const token = localStorage.getItem(TOKEN_KEY)
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
http.interceptors.response.use(
  /**
   * 如果您想获得http信息，如头信息或状态信息，请返回  response => response
   */
  /**
   * 通过自定义代码确定请求状态
   * 这只是一个例子
   * 您也可以通过HTTP状态码来判断状态
   */
  response => {
    const res = response.data
    if (res.code !== 0) {
      ElMessage({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res)
    } else {
      return response.data.data
    }
  },
  error => {
    ElMessage({
      message: '服务不可达，请通知管理员或者稍后再试~',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// 封装get方法
export async function get<T>(url: string, params?: any): Promise<T> {
  try {
    const response = await http.get(url, {params})
    return response.data.data
  } catch (error) {
    return Promise.reject(error)
  }
}

// 封装post方法
export async function post<T>(url: string, data?: any): Promise<T> {
  try {
    const response = await http.post(url, data)
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}
