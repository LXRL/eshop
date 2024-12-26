import hyRequest from "../request"

export function getHomeImg(){
    return hyRequest.get({
        url:'/'
    })
}