import hyRequest from "../request"

export function getHomeImg() {
    return hyRequest.get({
        url: '/home/img'
    })
}
export function getHomeWeekly() {
    return hyRequest.get({
        url: '/home/weekly'
    })
}

export function getHomePopularity(){
    return hyRequest
}