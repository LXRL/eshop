import hyRequest from "../request"

export function getShopping(par) {
    return hyRequest({
        url: '/sort/shopping'
    })
}