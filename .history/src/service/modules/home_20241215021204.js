import HYRequest from "../request/index"

export function getHomeImg() {
    return HYRequest.get({
        url: '/home/img'
    })
}