import hyRequest from "../request"

export function getLoginData(user) {
    return hyRequest.post({
        url: '/use/login',
        data: user
    })
}