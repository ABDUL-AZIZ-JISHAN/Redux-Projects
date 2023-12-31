import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const APISlice =createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000',
            // prepareHeaders: (headers, { getState }) =>{
            //     const token = getState()?.auth.token
            //     if (token) {
            //       headers.set('authorization', `Bearer ${token}`)
            //     }
            //     return headers
            // }
    }),
    tagTypes: ["Videos"],
    endpoints: () => ({})
})
