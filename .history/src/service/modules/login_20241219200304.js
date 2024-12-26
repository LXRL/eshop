import hyRequest from "../request"

export function getLoginData() {
    return hyRequest.get({
        url: '/use/'
    })
}