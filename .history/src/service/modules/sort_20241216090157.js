import hyRequest from "../request"

export function getSortClass(){
    return hyRequest.get({
        url:'/sort/sortclass'
    })
}