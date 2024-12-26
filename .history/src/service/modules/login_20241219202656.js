import hyRequest from "../request"

export function getLoginData(params) {
    return hyRequest.post({
        url: '/user/login',
        data: params
    })
}