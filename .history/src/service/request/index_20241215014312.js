import axios from "axios";
class HYRequest{
    constructor(baseURL,timeout=10000){
        this.instance=axios.create({
            baseURL,timeout
        })
    }
    request(config){
        return this.instance.request(config)
    }
    get(config){
        return this.request({...config,method:'get'})
    }
    post(config)
}