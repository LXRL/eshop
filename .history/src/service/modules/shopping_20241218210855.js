import hyRequest from "../request"

export function getShopping(para) {
    return hyRequest({
        url: '/sort/shopping'
    })
}