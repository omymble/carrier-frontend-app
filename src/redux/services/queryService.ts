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
                url: 'drivers',
                method: 'POST',
                body: driver
            })
        }),

        createUser: build.mutation<IPassenger, IPassenger>({
            query: (passenger) => ({
                url: 'passengers',
                method: 'POST',
                body: passenger
            })
        }),

        signIn: build.mutation<IAuth, IAuth>({
            query: (auth) => ({
                url: 'login',
                method: 'POST',
                body: auth
            })
        }),

    })
})

