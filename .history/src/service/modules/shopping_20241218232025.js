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

export function getShoppingDelete(id, params) {
    return hyRequest({
        url: '/shopping/shoppingdeletee',
        method: put,
        id: id,
        data: params
    })
}