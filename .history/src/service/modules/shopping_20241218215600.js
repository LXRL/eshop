import hyRequest from "../request"

export function getShopping(params) {
    return hyRequest.post({
        url: '/sort/shoppingsave',
        data: params
    })
}