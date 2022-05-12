import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFoundPassenger} from "../store/models/IFoundPassenger";
import {IFoundDriver} from "../store/models/IFoundDriver";
import {IDriver} from "../store/models/IDriver";
import {IPassenger} from "../store/models/IPassenger";
import {IAuth} from "../store/models/IAuth";


export const queryAPI = createApi({
    reducerPath: 'queryAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:80/'
    }),

    endpoints: (build) => ({

        fetchAllFoundDrivers: build.query<IFoundDriver[], number | void>({
            query: () => ({
                url: 'foundDrivers'
            })
        }),

        fetchAllFoundPassengers: build.query<IFoundPassenger[], number | void>({
            query: () => ({
                url: 'foundPassengers'
            })
        }),

        createDriver: build.mutation<IDriver, IDriver>({
            query: (driver) => ({
                url: 'driver',
                method: 'POST',
                body: driver
            })
        }),

        createPassenger: build.mutation<IPassenger, IPassenger>({
            query: (passenger) => ({
                url: 'passenger',
                method: 'POST',
                body: passenger
            })
        }),

        createAuth: build.mutation<IAuth, IAuth>({
            query: (auth) => ({
                url: 'authUser',
                method: 'POST',
                body: auth
            })
        }),

    })
})
