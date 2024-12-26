import hyRequest from "../request"

export function getLoginData(user) {
    return hyRequest.get({
        url: '/use/login'
    })
}