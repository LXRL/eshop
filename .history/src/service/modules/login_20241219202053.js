import hyRequest from "../request"

export function getLoginData(user) {
    return hyRequest.post({
        url: '/login"/login',
        data: user
    })
}