import hyRequest from "../request"

export function getLoginData(user) {
    return hyRequest.post({
        url: '/user/login',
        data: user
    })
}