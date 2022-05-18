export const toUnix = (time: Date) => {
    return Math.floor(time.getTime() / 1000).toFixed(0)
}

export const fromUnix = (numTime: number) => {
    let date = new Date(numTime * 1000)
    let hours = date.getHours()
    let min = date.getMinutes()
    return `${hours}:${min}`
}

export const diffTime = (myTime: number, userTime: number) => {

}