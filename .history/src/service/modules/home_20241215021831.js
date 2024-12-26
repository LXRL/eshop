import hyRequest from "../request/index"

export function getHomeImg() {
    return hyRequest.get({
        url: '/home/img'
    })
}