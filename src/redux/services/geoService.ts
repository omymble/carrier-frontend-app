import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IDriver} from "../store/models/IDriver";
import {IPoint} from "../store/models/IPoint";


/*export const geoAPI = createApi({
    reducerPath: 'geoAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://geocode-maps.yandex.ru/1.x/?apikey=f53fb552-fa13-43bb-80f6-18ef906b6437&geocode=134.854,-25.828&format=json'
    }),

    endpoints: (build) => ({
        fetchGeoCode: build.query<IDriver[], IPoint>({
            query: (point) => ({
                url: `/?apikey=f53fb552-fa13-43bb-80f6-18ef906b6437&geocode=${point.longitude},${point.latitude}&format=json`,
                body: point
            })
        })
    })
})*/
