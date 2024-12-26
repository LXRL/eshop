import hyRequest from "../request"

export function getSortClass() {
    return hyRequest.get({
        url: '/sort/sortClass'
    })
}
export function getSortShop() {
    return hyRequest.get({
        url: '/sort/shop'
    })
}

export function getSortP(params) {
    return hyRequest.get({
        url: '/sort/sortClasslistP'
    })
}