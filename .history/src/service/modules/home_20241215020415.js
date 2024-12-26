import hyRequest from "../request/i"

export function getHomeImg() {
    return hyRequest.get({
        url: '/home/img'
    })
}