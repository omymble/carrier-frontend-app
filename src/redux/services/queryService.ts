import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IDriver} from "../store/models/IDriver";
import {IPassenger} from "../store/models/IPassenger";
import {IDriversList} from "../store/models/IDriver"
import {IAuth} from "../store/models/IAuth";


export const queryAPI = createApi({
    reducerPath: 'queryAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:80/'
    }),
    tagTypes: ['tripDriver'],

    endpoints: (build) => ({
        fetchAllFoundDrivers: build.query<IDriversList, number | void>({
            query: () => ({
                url: 'foundDrivers'
            })
        }),
        fetchAllFoundPassengers: build.query<IPassenger[], number | void>({
            query: () => ({
                url: 'foundPassengers'
            })
        }),
        createAuth: build.mutation<IAuth, IAuth>({
            query: (auth) => ({
                url: 'authUser',
                method: 'POST',
                body: auth
            })
        }),

        createDriver: build.mutation<IDriver, IDriver>({
            query: (driver) => ({
                url: 'driver',
                method: 'POST',
                body: driver
            }),
            invalidatesTags: ['tripDriver']
        }),

        createPassenger: build.mutation<IPassenger, IPassenger>({
            query: (passenger) => ({
                url: 'passenger',
                method: 'POST',
                body: passenger
            })
        }),

        updateDriverTrip: build.mutation<IDriver, IDriver>({
            query: (driver) => ({
                url: `update-trip/${driver.telephone}`,
                method: 'PUT',
                body: driver
            }),
            invalidatesTags: ['tripDriver']
        }),

        deleteDriverTrip: build.mutation<IDriver, string>({
            query: (tel) => ({
                url: `delete-trip/${tel}`,
                method: 'DELETE',
                body: tel
            }),
            invalidatesTags: ['tripDriver']
        }),

    })
})
