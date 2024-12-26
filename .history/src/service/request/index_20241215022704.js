import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"
class HYRequest {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL, timeout
        })
        // 拦截器 request 执行请求前 response 执行请求成功后
        this.instance.interceptors.request.use((config) => {
            mainStore.isLoading = true
            return config
        }, err => {
            return err
        })
        this.instance.interceptors.response.use(res => {
            mainStore.isLoading = false
            return res
        }, err => {
            mainStore.isLoading = false
            return err
        })
    }
    request(config) {
        return this.instance.request(config)
    }
    get(config) {
        return this.request({ ...config, method: "get" })

    }
    post(config) {
        return this.request({ ...config, method: "post" })
    }
}
export default new HYRequest(BASE_URL, TIMEOUT)
