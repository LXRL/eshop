import hyRe

export function getHomeImg() {
    return hyRequest.get({
        url: '/home/img'
    })
}