import hyRequest from "../request"

export function getShopping(params) {
    return hyRequest({
        url: '/sort/shopping'
    })
}