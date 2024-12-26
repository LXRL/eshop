import axios from "axios";
class HYRequest{
    constructor(baseURL,timeout=10000){
        this.instance=axios.create({
            baseURL,timeout
        })
    }
    request(config)
}