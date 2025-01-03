import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"
class HYRequest {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL, timeout
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
    put(config){
        return this.request({ ...config, method: "put" })
    }
}
export default new HYRequest(BASE_URL, TIMEOUT)

