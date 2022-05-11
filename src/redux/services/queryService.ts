import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFoundPassenger} from "../store/models/IFoundPassenger";
import {IFoundDriver} from "../store/models/IFoundDriver";


export const queryAPI = createApi({
    reducerPath: 'queryAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://raw.githubusercontent.com/omymble/demo/master/'
    }),
    endpoints: (build) => ({
        fetchAllFoundDrivers: build.query<IFoundDriver[], number | void>({
            query: () => ({
                url: 'db_drivers.json',
                // params: {
                //     _limit: limit
                // }
            })

        }),
        fetchAllFoundPassengers: build.query<IFoundPassenger[], number | void>({
            query: () => ({
                url: 'db_passengers.json'
            })
        })
    })
})

