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
    tagTypes: ['driverTrip', 'passengerTrip', 'foundDrivers', 'foundPassengers', 'authUser', 'drivers', 'passengers', 'auth'],

    endpoints: (build) => ({
        fetchAllFoundDrivers: build.query<IDriversList, number | void>({
            query: () => ({
                url: 'found-drivers'
            }),
            providesTags: result => ['drivers']
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
            }),
            providesTags: result => ['passengers']
        }),

        createAuth: build.mutation<IAuth, IAuth>({
            query: (auth) => ({
                url: 'auth-user',
                method: 'POST',
                body: auth
            }),
            invalidatesTags: ['auth']
        }),
        deleteAuth: build.mutation<IAuth, IAuth>({
            query: (authUser) => ({
                url: `auth-user/${authUser.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: 'auth'}]
        }),

        createDriver: build.mutation<IDriver, IDriver>({
            query: (driver) => ({
                url: 'drivers',
                method: 'POST',
                body: driver
            }),
            invalidatesTags: ['drivers']
        }),
        deleteDriver: build.mutation<IDriver, string>({
            query: (id) => ({
                url: `drivers/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['drivers']
        }),

        createPassenger: build.mutation<IPassenger, IPassenger>({
            query: (passenger) => ({
                url: 'passengers',
                method: 'POST',
                body: passenger
            }),
            invalidatesTags: ['passengers']
        }),
        deletePassenger: build.mutation<IPassenger, IPassenger>({
            query: (id) => ({
                url: `passengers/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['passengers']
        }),

    })
})
