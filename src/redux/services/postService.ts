import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../store/models/IPost";
import {IUser} from "../store/models/IUser";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number | void>({
            query: () => ({
                url: 'posts',
                // params: {
                //     _limit: limit
                // }
            })

        }),
        fetchAllUsers: build.query<IUser[], number | void>({
            query: () => ({
                url: 'users'
            })
        })
    })
})

