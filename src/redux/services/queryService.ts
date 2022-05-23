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
    tagTypes: ['driverTrip', 'passengerTrip', 'foundDrivers', 'foundPassengers', 'authUser'],

    endpoints: (build) => ({
        fetchAllFoundDrivers: build.query<IDriversList, number | void>({
            query: () => ({
                url: 'found-drivers'
            }),
/*            providesTags: (result) =>
                // is result available?
                result
                    ? // successful query
                    [
                        ...result.bestTime.map(({ id }) => ({ type: 'Posts', id } as const)),
                        { type: 'Posts', id: 'LIST' },
                    ]
                    : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                    [{ type: 'Posts', id: 'LIST' }],*/
        }),
        fetchAllFoundPassengers: build.query<IPassenger[], number | void>({
            query: () => ({
                url: 'found-passengers'
            })
        }),
        createAuth: build.mutation<IAuth, IAuth>({
            query: (auth) => ({
                url: 'auth-user',
                method: 'POST',
                body: auth
            }),
            invalidatesTags: [{type: 'authUser', id: 'OBJECT'}]
        }),
        deleteAuth: build.mutation<IDriver, string>({
            query: (id) => ({
                url: `auth-user/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: 'driverTrip'}]
        }),

        createDriver: build.mutation<IDriver, IDriver>({
            query: (driver) => ({
                url: 'drivers',
                method: 'POST',
                body: driver
            }),
            invalidatesTags: [{type: 'driverTrip', id: 'LIST'}]
        }),
        deleteDriverTrip: build.mutation<IDriver, string>({
            query: (id) => ({
                url: `drivers/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: 'driverTrip'}]
        }),

        createPassenger: build.mutation<IPassenger, IPassenger>({
            query: (passenger) => ({
                url: 'passengers',
                method: 'POST',
                body: passenger
            }),
            invalidatesTags: [{type: 'passengerTrip', id: 'LIST'}]
        }),
        deletePassengerTrip: build.mutation<IPassenger, string>({
            query: (id) => ({
                url: `passengers/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: 'passengerTrip'}]
        }),

    })
})
