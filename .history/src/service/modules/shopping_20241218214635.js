import hyRequest from "../request"

export function getShopping(params) {
    return hyRequest.get({
        url: '/sort//shoppingsave',
        params: params
    })
}