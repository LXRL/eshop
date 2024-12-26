import h

export function getHomeImg() {
    return hyRequest.get({
        url: '/home/img'
    })
}