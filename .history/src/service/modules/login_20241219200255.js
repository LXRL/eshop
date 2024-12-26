import hyRequest from "../request"

export function getLogin() {
    return hyRequest.get({
        url: '/home/img'
    })
}