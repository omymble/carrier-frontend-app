import {axios} from "./index";
import {IDriver} from "./redux/store/models/IDriver";
import {IFoundDriver} from "./redux/store/models/IFoundDriver";
import {API_1} from "./consts";
import {IPassenger} from "./redux/store/models/IPassenger";
import {IFoundPassenger} from "./redux/store/models/IFoundPassenger";

export const toUnix = (time: Date) => {
    return Math.floor(time.getTime() / 1000)/*.toFixed(0)*/
}

export const fromUnix = (numTime: number) => {
    let date = new Date(numTime * 1000)
    let hours = date.getHours()
    let min = date.getMinutes()
    return `${hours}:${min}`
}

export const diffTime = (myTime: number, userTime: number) => {
    let diff: number = Math.floor(Math.abs(myTime - userTime) / 1000)
    diff = Math.floor(diff / 60)
    let diffMin: number = diff % 60
    diff = Math.floor(diff % 60)
    let diffHour: number = diff % 60
    if (myTime > userTime) {
        return `раньше на ${diffHour}ч. ${diffMin}мин.`
    } else if (myTime < userTime) {
        return `позже на ${diffHour}ч. ${diffMin}мин.`
    } else {
        let time: string = fromUnix(userTime)
        return `едет в ${time}`
    }
}

export const getAddress = async (longitude: number, latitude: number) => {
    try {
        const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${API_1}&geocode=${longitude},${latitude}&format=json`)
        return response.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text
    } catch (error) {
        throw new Error(`Unable to get addres`)
    }
}

export const parseDriver = async (driver: IDriver) => {
    const addrFrom = await getAddress(driver.from.longitude, driver.from.latitude)
    const addrTo = await getAddress(driver.to.longitude, driver.to.latitude)
    let foundDriver: IFoundDriver = {
        name: driver.name,
        telephone: driver.id,
        time: fromUnix(driver.time),
        from: addrFrom,
        to: addrTo
    }
    return foundDriver
}

export const parsePassenger = async (passenger: IPassenger) => {
    const addrFrom = await getAddress(passenger.from.longitude, passenger.from.latitude)
    const addrTo = await getAddress(passenger.to.longitude, passenger.to.latitude)
    let foundPassenger: IFoundPassenger = {
        name: passenger.name,
        telephone: passenger.id,
        time: fromUnix(passenger.time),
        from: addrFrom,
        to: addrTo
    }
    return foundPassenger
}
