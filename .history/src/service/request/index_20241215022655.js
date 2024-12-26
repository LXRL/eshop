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
export default new HYRequest(BASE_URL, TIMEOUT)

