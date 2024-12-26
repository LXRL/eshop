import hyRequest from "../request"

export function getShoppingSave(params) {
    return hyRequest.post({
        url: '/shopping/shoppingsave',
        data: params
    })
}

export function getShoppingData() {
    return hyRequest.get({
        url: '/shopping/shopping'
    })
}

export function getShoppingDelete(params) {
    return hyRequest.get({
        url: '/shopping/shopdelete',
        data: params
    })
}
export function getShoppingMod(params) {
    return hyRequest.post({
        url: '/shopping/shoppingmod',
        data: params
    })
}
