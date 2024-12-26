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
    return hyRequest.get({
        url: '/shopping/shoppingdeletee',
        id: id,
        data: params
    })
}

export function getSh