import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"
import useMain from "@/store/modules/main"
const mainStore = useMain()
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
        // 这样写输入的时候就不用 res.data.data 这里默认获取的是 res.data 不用这种方法是看不懂
        // return new Promise((resolve,reject)=>{
        //     this.instance.request(config).then(res=>{
        //         resolve(res.data)
        // mainStore.isLoading = false 
        //     }).catch(err=>{
        //         reject(err)
        //   mainStore.isLoading = false
        //     })
        // })
    }
    get(config) {
        return this.request({ ...config, method: "get" })

    }
    post(config) {
        return this.request({ ...config, method: "post" })
    }
}
// 创建多个实例
// const hyRequest1 = new HYRequest("http://123.207.32.32:9001")
// const hyRequest2 = new HYRequest("http://123.207.32.32:8000")

export default new HYRequest(BASE_URL, TIMEOUT)

// axios.request 是 Axios 库中用于发送 HTTP 请求的方法。它允许你以灵活的方式配置请求，并接收响应。

// axios.request 是 axios 对象上的一个方法，它接收一个 config 对象作为参数，该对象包含请求的所有必要信息，例如：

// url: 请求的 URL 地址。
// method: 请求方法，例如 GET、POST、PUT、DELETE 等。
// headers: 请求头。
// data: 请求体。
// params: URL 参数。
// responseType: 响应类型。
// timeout: 请求超时时间。
// axios.request 返回一个 Promise 对象，该对象在请求成功时解析为响应数据，在请求失败时拒绝。