import { APISlice } from "../api/APISlice";


export const projectApi = APISlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => ({
                url: "/projects"
            }),
            keepUnusedDataFor: 600
        }),
        getProject: builder.query({
            query: (id) => ({
                url: `/projects/${id}`
            }),
            keepUnusedDataFor: 600
        })

    })
})

export const  { useGetProjectsQuery, useGetProjectQuery } = projectApi;